/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";

import style from "../../styles/home.module.scss";
import request from "../../utils/request";
import { useTranslation } from "next-i18next";

import Image from "next/image";

const ProductsInline = ({ className, loading, category }) => {
  const { t, i18n } = useTranslation("layout");

  const [categoryData, setCategoryData] = useState({
    loading: true,
    products: [],
  });

  useEffect(() => {
    setCategoryData({
      loading: true,
      products: [],
    });
  }, [category]);

  useEffect(() => {
    if (loading || !categoryData.loading) return;

    const getCategoryProduct = async () => {
      const { data } = await request(
        `/products/category/${category.title}?limit=10`
      );

      const collectionData = {
        loading: false,
        products: data,
      };

      setCategoryData(collectionData);
    };

    getCategoryProduct();
  }, [loading, categoryData.loading, category]);

  return (
    <div className={`bg-light text-dark my-3 p-3 ${className || ""}`}>
      <div className="heading">
        <h2 className="fs-4 fw-bold text-cut-1">
          {categoryData.loading ? t("loading") : category?.title}
        </h2>
      </div>

      <div className={`${style.products} pb-3`}>
        {categoryData.loading
          ? [...Array(10)].map((_, idx) => (
              <div
                key={idx}
                className={`${style.product} flex-center ps-1`}
                style={{ width: "100%", minHeight: "250px" }}
              >
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">{t("loading")}</span>
                </div>
              </div>
            ))
          : categoryData?.products?.products?.map((product, idx) => (
              <Link
                locale={i18n.language}
                key={idx}
                href={`/product/${product.id}`}
              >
                <div
                  style={{ minHeight: "250px", minWidth: "180px" }}
                  className={`${style.product} w-100 flex-center ps-1 cu-pointer border position-relative`}
                >
                  <Image layout="fill" src={product.thumbnail} alt="" />
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default ProductsInline;
