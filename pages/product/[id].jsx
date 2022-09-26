import React, { useState, useEffect } from "react";

import Head from "next/head";

import Layout from "../../layout";
import ProductsInline from "../../components/ProductsInline";
import Product from "../../components/Product";

import request from "../../utils/request";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const shuffle = (arr) => {
  const array = [...arr];

  return array.sort(() => Math.random() - 0.5);
};

const ProductPage = ({ productData }) => {
  const [categoriesData, setCategories] = useState([]);
  const { categories, isLoading } = useSelector(({ categories }) => categories);
  const router = useRouter();

  useEffect(() => {
    setCategories(shuffle(categories));

    router.events.on("routeChangeComplete", () => {
      setCategories(shuffle(categories));
    });
  }, [categories, router]);

  return (
    <Layout>
      <section className="bg-white py-5">
        <Head>
          <title>{`Amazon.com: ${productData?.title || ""}`}</title>
        </Head>

        <Product productData={productData} />

        {isLoading
          ? categoriesData
              .slice(0, 2)
              .map((category, idx) => (
                <ProductsInline
                  className={!idx ? "pb-4" : ""}
                  key={idx}
                  category={category}
                />
              ))
          : [...Array(2)].map((_, idx) => (
              <ProductsInline
                className={!idx ? "pb-4" : ""}
                key={idx}
                loading
              />
            ))}
      </section>
    </Layout>
  );
};

export default ProductPage;

export const getServerSideProps = async ({ params, locale }) => {
  const { data: product } = await request(`/products/${params.id}`);

  return {
    props: {
      productData: product,
      ...(await serverSideTranslations(locale, ["product", "layout"])),
    },
  };
};
