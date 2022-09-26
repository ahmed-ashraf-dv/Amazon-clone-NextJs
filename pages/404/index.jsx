/* eslint-disable @next/next/no-img-element */
import React from "react";

import Head from "next/head";
import Layout from "../../layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const randomDogImg = () => {
  const getImg = (num) => {
    return `https://images-na.ssl-images-amazon.com/images/G/01/error/${num}._TTD_.jpg`;
  };

  const randNum = Math.round(Math.random() * (100 - 1) + 1);

  return getImg(randNum);
};

const ErrorPage = () => {
  const { t } = useTranslation("404");

  return (
    <Layout bg="#fff">
      <Head>
        <title>{t("title")}</title>
      </Head>

      <main className="flex-center flex-column pb-5">
        <img
          className="pt-5 mt-1 pe-5 me-5"
          width={520}
          src="/err_page/error_title_.png"
          alt=""
        />
        <img
          className="ms-5 mt-4 mb-4"
          width={520}
          src={randomDogImg()}
          alt=""
        />
      </main>
    </Layout>
  );
};

export default ErrorPage;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["404", "layout"])),
      locale,
    },
  };
};
