import React from "react";

import { useTranslation } from "next-i18next";

const taps = ["Conditions of Use", "Privacy Notice", "Help"];

const Footer = () => {
  const { t } = useTranslation("layout");

  return (
    <footer className="pt-3">
      <ul className="list-unstyled flex-center">
        {taps.map((tap, idx) => (
          <li
            key={idx}
            className="mx-3 small p-0 btn btn-link text-decoration-none"
          >
            {t("guestFooter.taps." + tap)}
          </li>
        ))}
      </ul>
      <p className="small text-muted text-center">
        {t("guestFooter.description")}
      </p>
    </footer>
  );
};

export default Footer;
