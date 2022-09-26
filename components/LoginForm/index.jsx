/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { useTranslation } from "next-i18next";

const SignForm = () => {
  const { t } = useTranslation("signin");

  const onSubmitHandelar = (e) => {
    e.preventDefault();

    alert("Just For Design");
  };

  return (
    <form
      onSubmit={onSubmitHandelar}
      className="py-1 pb-4 px-3 border form-width"
    >
      <h2 className="py-2 fs-3">{t("form.title")}</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label small fw-semibold">
          {t("form.inputs.email")}
        </label>
        <input
          type="email"
          className="form-control main-box-shadow"
          id="email"
          aria-describedby="emailHelp"
        />
      </div>
      <button className="btn btn-warning w-100">{t("form.continue")}</button>
    </form>
  );
};

export default SignForm;
