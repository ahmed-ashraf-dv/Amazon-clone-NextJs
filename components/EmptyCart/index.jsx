/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

import { useTranslation } from "next-i18next";

const EmptyCart = () => {
  const { t, i18n } = useTranslation("cart");

  return (
    <div className="empty flex-start flex-column flex-md-row mt-4 align-items-center align-items-nd-start">
      <div className="img me-4">
        <img width={220} src="/static/imgs/cart/empty-cart.svg" alt="" />
      </div>

      <div className="details">
        <h2 className="fs-4 mb-3">{t("emptyCart.title")}</h2>

        <div className="btns flex-start align-items-center">
          <Link locale={i18n.language} href="/signin">
            <button className="py-1 btn btn-warning h-100 me-2 rounded">
              {t("emptyCart.btns.signin")}
            </button>
          </Link>

          <Link locale={i18n.language} href="/signup">
            <button className="py-1 px-3 border bg-white rounded">
              {t("emptyCart.btns.signup")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
