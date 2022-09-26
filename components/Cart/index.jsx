/* eslint-disable @next/next/no-img-element */
import React from "react";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Link from "next/link";
import style from "../../styles/layout.module.scss";

import { useTranslation } from "next-i18next";

const Cart = () => {
  const { t, i18n } = useTranslation("layout");

  const { products } = useSelector(({ cart }) => cart);
  const router = useRouter();

  return (
    <Link locale={i18n.language} href="/cart">
      <div className="flex-center gap-2 text-muted-light cu-pointer">
        <div className="position-relative flex-center">
          <div className="cart-icon position-relative">
            <span
              style={{ translate: router.locale == "ar" ? "70%" : "-35%" }}
              className={`${style.cartNum} fw-bold text-warning position-absolute start-50 small`}
            >
              {products ? (products.length > 9 ? "9" : products.length) : "..."}
            </span>
            <img src="/static/imgs/cart/logo.png" width="30" alt="err" />
          </div>

          <span className="fw-bold pt-1 text-white">{t("header.cart")}</span>
        </div>
      </div>
    </Link>
  );
};

export default Cart;
