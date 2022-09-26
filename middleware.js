import { NextResponse } from "next/server";
import { i18n } from "/next.config";

const PUBLIC_FILE = /\.(.*)$/;

const middleware = async (req) => {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  const { nextUrl, headers, cookies } = req;
  const LOCALES = i18n.locales;
  const COOKIE_KEY = "lang";
  const BROWSER_LOCALE =
    headers
      .get("accept-language")
      ?.split(",")?.[0]
      .split("-")?.[0]
      .toLowerCase() || LOCALES[1];

  try {
    if (nextUrl.locale === cookies.get(COOKIE_KEY)) {
      return;
    }

    if (!cookies.get(COOKIE_KEY)) {
      const date = new Date();
      const afterDate = new Date(date.setDate(date.getDate() + 365)); // date after year

      const url = new URL(`/${BROWSER_LOCALE}${nextUrl.pathname}`, req.url);
      const res = NextResponse.redirect(url);
      res.cookies.set(COOKIE_KEY, BROWSER_LOCALE, {
        expires: afterDate,
      });

      return res;
    }

    if (!LOCALES.includes(cookies.get(COOKIE_KEY))) {
      return;
    }

    if (nextUrl.locale !== cookies.get(COOKIE_KEY)) {
      const url = new URL(
        `/${cookies.get(COOKIE_KEY)}${nextUrl.pathname}`,
        req.url
      );
      return NextResponse.redirect(url);
    }
  } catch (err) {
    return console.log(err);
  }
};

export default middleware;
