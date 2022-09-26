/* eslint-disable @next/next/no-img-element */
import React from "react";
import GetStarts from "../GetStarts";

import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "next-i18next";

const getDiscount = (price, discountPercentage) => {
  const disCountSize = Math.round(price * (discountPercentage / 100));

  return price - disCountSize;
};

const ProductResult = ({ product }) => {
  const { t, i18n } = useTranslation("layout");

  return (
    <article className="border mb-3 row bg-white">
      <Link locale={i18n.language} href={`/product/${product.id}`}>
        <div className="img flex-center bg-light col-3 position-relative cu-pointer">
          <Image height="200" width="160" src={product.thumbnail} alt="err" />
        </div>
      </Link>

      <div className="details col-9">
        <Link locale={i18n.language} href={`/product/${product.id}`}>
          <h3 className="fs-5 mt-3 main-hover cu-pointer">{product.title}</h3>
        </Link>
        <div className="rate">
          <GetStarts item={product.rating} noUp />
          <span className="ms-2 small fw-bold">2000</span>
        </div>

        <div className="price flex-start align-items-center fs-5 mt-2">
          <span className="flex-start">
            <span>{t("From")}</span>
            <span className="ms-2" style={{ fontSize: "16px" }}>
              $
            </span>
            <span>
              {getDiscount(product.price, product.discountPercentage)}
            </span>
          </span>

          {product && (
            <span
              style={{ fontSize: "16px" }}
              className="ms-1 flex-start text-decoration-line-through"
            >
              <span className="small">$</span>
              <span>{product.price}</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductResult;
