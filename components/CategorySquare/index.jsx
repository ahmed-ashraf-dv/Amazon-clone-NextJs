import React, { useMemo } from "react";
import Image from "next/image";

import style from "../../styles/categorySquare.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const CategorySquare = ({ loading, category }) => {
  const { t, i18n } = useTranslation("layout");

  const productId = useMemo(() => {
    const searchIndexWord = "products/";
    const idx = category?.img.indexOf(searchIndexWord);

    if (idx < 0) return null;

    const idFirst = category?.img.slice(idx + searchIndexWord.length);
    const currentId = idFirst?.split("/")[0];

    return currentId;
  }, [category]);

  return (
    <article className={`${style.categorySquare} bg-light text-dark p-3 my-2`}>
      <div className="head">
        <h3 className="fs-4 text-cut-1">
          {loading ? t("loading") : category.title}
        </h3>
      </div>

      <div
        style={{ minHeight: "300px" }}
        className={`img ${style.img} flex-center w-100 position-relative mb-3`}
      >
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">{t("loading")}</span>
          </div>
        ) : productId ? (
          <Link locale={i18n.language} href={`/product/${productId}`}>
            <div className="img position-relative h-100 w-100">
              <Image
                className="cu-pointer"
                layout="fill"
                src={category.img}
                alt=""
              />
            </div>
          </Link>
        ) : (
          <Image layout="fill" src={category.img} alt="" />
        )}
      </div>

      <div className="footer">
        {!loading && (
          <Link locale={i18n.language} href={`/result/${category.title}`}>
            <p className="text-primary cu-pointer small ps-2">{t("SeeMore")}</p>
          </Link>
        )}
      </div>
    </article>
  );
};

export default CategorySquare;
