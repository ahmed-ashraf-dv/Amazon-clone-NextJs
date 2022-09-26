/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../../styles/layout.module.scss";

import { useTranslation } from "next-i18next";

const taps = [
  {
    heading: "Get to Know Us",
    taps: [
      "Careers",
      "Blog",
      "About Amazon",
      "Investor Relations",
      "Amazon Devices",
      "Amazon Science",
    ],
  },
  {
    heading: "Make Money with Us",
    taps: [
      "Sell products on Amazon",
      "Sell on Amazon Business",
      "Sell apps on Amazon",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an Amazon Hub",
      "See More Make Money with Us",
    ],
  },
  {
    heading: "Amazon Payment Products",
    taps: [
      "Amazon Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Amazon Currency Converter",
    ],
  },
  {
    heading: "Let Us Help You",
    taps: [
      "Amazon and COVID-19",
      "Your Account",
      "Your Orders",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Content and Devices",
      "Amazon Assistant",
      "Help",
    ],
  },
];

const Footer = () => {
  const { t } = useTranslation("layout");

  return (
    <footer className={`${style.footer} text-light pb-4`}>
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className={`btn btn-dark btn-top w-100 rounded-0 ${style.btnToTob}`}
      >
        {t("mainFooter.toTopBtn")}
      </button>

      <div className="container">
        <div className="footer pt-5 pb-5">
          <div className="box flex-start flex-wrap gap-3 justify-content-between">
            {taps.map((tap, idx) => (
              <ul key={idx} className="list-unstyled">
                <p className="text-light">
                  {t("mainFooter.headings." + tap.heading)}
                </p>

                {tap.taps.map((el, idx) => (
                  <li
                    className="text-muted-light cu-pointer small my-2"
                    key={idx}
                  >
                    {t("mainFooter.taps." + el)}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <hr />

      <div className="container">
        <div className="box flex-center gap-5 py-3">
          <img width={100} src="/static/imgs/larg-logo.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
