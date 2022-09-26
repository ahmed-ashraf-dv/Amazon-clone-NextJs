import React, { useState, Fragment } from "react";
import style from "../../styles/home.module.scss";

import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { show, hidden } from "../../store/BackdropSlice";
import { useMemo } from "react";
import { setCookie } from "cookies-next";

import { useTranslation } from "next-i18next";

let timeout;
const languages = ["English - EN", "العربية - AR"];

const getLangKey = (lang) => {
  return lang.split("-").at(-1).replaceAll(" ", "").toLocaleLowerCase();
};

const Languages = () => {
  const { t } = useTranslation("layout");

  const dispatch = useDispatch();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const currentLang = useMemo(
    () =>
      languages.filter((lang) => {
        lang = lang.replaceAll(" ", "").split("-").at(-1).toLocaleLowerCase();

        return router.locale == lang;
      })[0],
    [router]
  );

  const isOpenAttr = () => {
    return isOpen
      ? {
          style: {
            position: "absolute",
            inset: "0px auto auto 0px",
            margin: "0px",
            transform: "translate(-50%, 40px)",
            left: "50%",
          },
          "data-popper-placement": "bottom-start",
        }
      : {};
  };

  const handelOpen = () => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      setIsOpen(true);
      dispatch(show());
    }, 300);
  };

  const handelClose = () => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      setIsOpen(false);
      dispatch(hidden());
    }, 300);
  };

  const changeLang = (targetLang) => {
    targetLang = getLangKey(targetLang);

    const day = 60 * 60 * 24;
    setCookie("lang", targetLang, { path: "/", maxAge: day * 100 });
    window.location.pathname = `/${targetLang}${router.asPath}`;
  };

  return (
    <div
      onClick={() => (isOpen ? handelClose() : setIsOpen(true))}
      className={`dropdown`}
      onMouseLeave={handelClose}
      onMouseEnter={handelOpen}
    >
      <button
        className={`btn border-0 p-0 transparent-btn text-light dropdown-toggle ${
          isOpen ? "show" : ""
        }`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <span className="small">
          {t(
            "header.languages." + currentLang?.split("-")[0].replaceAll(" ", "")
          )}
        </span>
      </button>
      <ul
        className={`dropdown-menu ${style.dropdownMenu} ${
          isOpen ? "show" : ""
        }`}
        {...isOpenAttr()}
      >
        {languages.map((lang, idx) => (
          <Fragment key={idx}>
            <li onClick={() => changeLang(lang)} className="cu-pointer">
              <div className={`dropdown-item small`}>
                <div className="form-check">
                  <input
                    className="form-check-input cu-pointer"
                    type="radio"
                    defaultChecked={lang === currentLang}
                  />
                  <p className="form-check-label cu-pointer">{lang}</p>
                </div>
              </div>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
