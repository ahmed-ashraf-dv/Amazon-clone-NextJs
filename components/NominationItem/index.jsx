import React from "react";

import GetStarts from "../GetStarts";
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "next-i18next";

const NominationItem = ({ product, loading }) => {
  const { t, i18n } = useTranslation("cart");

  return (
    <article className="mb-3 row bg-white w-100 pb-2 px-1">
      {loading ? (
        <div
          style={{ minHeight: "80px" }}
          className="img flex-center bg-light col-3 position-relative cu-pointer"
        >
          <div className="spinner-border" style={{ scale: ".5" }} role="status">
            <span className="visually-hidden">{t("layout:loading")}</span>
          </div>
        </div>
      ) : (
        <Link locale={i18n.language} href={`/product/${product.id}`}>
          <div className="img flex-center bg-light col-3 position-relative cu-pointer">
            <Image height="200" width="160" src={product.thumbnail} alt="err" />
          </div>
        </Link>
      )}

      <div className="details col-9">
        {loading ? (
          <p className="text-cut-1 m-0 main-hover cu-pointer">
            {t("layout:loading")}
          </p>
        ) : (
          <Link locale={i18n.language} href={`/product/${product.id}`}>
            <p className="text-cut-1 m-0 main-hover cu-pointer">
              {product.title}
            </p>
          </Link>
        )}

        <div className="rate">
          {!loading && (
            <>
              <GetStarts item={product.rating} noUp small />
              <span className="ms-2 small">2000</span>
            </>
          )}
        </div>

        <div className="price flex-start align-items-center fs-5 mt-2">
          <span className="flex-start">
            {!loading && (
              <>
                <span>{product.price}</span>
                <span className="me-2" style={{ fontSize: "16px" }}>
                  $
                </span>
              </>
            )}
          </span>
        </div>
      </div>
    </article>
  );
};

export default NominationItem;
