/* eslint-disable @next/next/no-img-element */
import React from "react";

import { useSelector } from "react-redux";
import style from "../styles/home.module.scss";

import Head from "next/head";
import CategorySquare from "../components/CategorySquare";
import HomeCarosal from "../components/HomeCarosal";
import ProductsInline from "../components/ProductsInline";
import Layout from "../layout";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  // categories
  const { categories, isLoading } = useSelector(({ categories }) => categories);
  const { t } = useTranslation("home");

  return (
    <Layout>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <div className={`${style.homePage} container-fluid`}>
        <div className={`${style.box} w-100`}>
          <HomeCarosal />

          <div style={{ zIndex: 2 }} className="main mx-4 position-relative">
            {!isLoading ? (
              <>
                <div className="row">
                  {[...Array(8)].map((_, idx) => (
                    <div key={idx} className="flex-center col-lg-3 col-md-4">
                      <CategorySquare loading />
                    </div>
                  ))}
                </div>

                {[...Array(2)].map((_, idx) => (
                  <ProductsInline key={idx} loading />
                ))}

                <div className="row">
                  {[...Array(4)].map((_, idx) => (
                    <div key={idx} className="flex-center col-md-3 col-sm-6">
                      <CategorySquare loading />
                    </div>
                  ))}
                </div>

                {[...Array(2)].map((_, idx) => (
                  <ProductsInline key={idx} loading />
                ))}
              </>
            ) : (
              <>
                <div className="row">
                  {categories.slice(0, 8).map((category, idx) => (
                    <div key={idx} className="flex-center col-lg-3 col-md-4">
                      <CategorySquare category={category} />
                    </div>
                  ))}
                </div>

                {categories.slice(8, 10).map((category, idx) => (
                  <ProductsInline category={category} key={idx} />
                ))}

                <div className="row">
                  {categories.slice(10, 14).map((category, idx) => (
                    <div key={idx} className="flex-center col-md-3 col-sm-6">
                      <CategorySquare category={category} />
                    </div>
                  ))}
                </div>

                {categories.slice(14, 16).map((category, idx) => (
                  <ProductsInline key={idx} category={category} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "layout"])),
      locale,
    },
  };
};
