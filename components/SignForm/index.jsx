/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { useTranslation } from "next-i18next";

const SignForm = () => {
  const { t } = useTranslation("signup");

  const onSubmitHandelar = (e) => {
    e.preventDefault();

    alert("Just For Design");
  };

  return (
    <form
      onSubmit={onSubmitHandelar}
      className="py-1 pb-4 px-3 border form-width mb-5"
    >
      <h2 className="py-2 fs-3">{t("form.title")}</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label small fw-semibold">
          {t("form.inputs.name.label")}
        </label>
        <input
          placeholder={t("form.inputs.name.placeholder")}
          type="text"
          className="form-control main-box-shadow"
          id="name"
          aria-describedby="emailHelp"
        />
      </div>

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

      <div className="mb-3">
        <label htmlFor="password" className="form-label small fw-semibold">
          {t("form.inputs.password.label")}
        </label>
        <input
          placeholder={t("form.inputs.password.placeholder")}
          type="password"
          className="form-control main-box-shadow"
          id="password"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          {t("form.inputs.passwordValid")}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="re-password" className="form-label small fw-semibold">
          {t("form.inputs.rePassword.label")}
        </label>
        <input
          placeholder={t("form.inputs.rePassword.placeholder")}
          type="password"
          className="form-control main-box-shadow"
          id="re-password"
          aria-describedby="emailHelp"
        />
      </div>

      <button className="btn btn-warning w-100">{t("form.continue")}</button>
    </form>
  );
};

export default SignForm;
