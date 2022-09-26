import React from "react";

import GuestLayout from "../../layout/GuestLayout";
import SignForm from "../../components/SignForm";
import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Signup = () => {
  const { t } = useTranslation("signup");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <GuestLayout>
        <div className="form flex-center pb-4 pt-2">
          <SignForm />
        </div>
      </GuestLayout>
    </>
  );
};

export default Signup;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["signup", "layout"])),
    },
  };
};
