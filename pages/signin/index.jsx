import React from "react";

import GuestLayout from "../../layout/GuestLayout";
import LoginForm from "../../components/LoginForm";
import Head from "next/head";
import style from "../../styles/home.module.scss";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Signin = () => {
  const { t, i18n } = useTranslation("signin");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <GuestLayout>
        <div className="form form-width m-auto pb-4 pt-2">
          <LoginForm />

          <div
            className={`${style.lineLr} text-muted text-center my-2 mt-3 mb-4 small`}
          >
            <p className="px-2">{t("newToAmazon")}</p>
          </div>

          <Link locale={i18n.language} href="/signup">
            <button className="w-100 py-2 mb-3 border main-box-shadow">
              {t("createYourAmazonAccount")}
            </button>
          </Link>
        </div>
      </GuestLayout>
    </>
  );
};

export default Signin;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["signin", "layout"])),
    },
  };
};
