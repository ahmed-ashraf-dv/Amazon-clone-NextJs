import React, { useState } from "react";
import style from "../../styles/home.module.scss";

import { useDispatch } from "react-redux";
import { show, hidden } from "../../store/BackdropSlice";
import Link from "next/link";

import { useTranslation } from "next-i18next";

// New customer? Start here.
let timeout;

const Languages = () => {
  const { t, i18n } = useTranslation("layout");

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const isOpenAttr = () => {
    return isOpen
      ? {
          style: {
            position: "absolute",
            inset: "0px auto auto 0px",
            margin: "0px",
            transform: "translate(-50%, 40px)",
            left: "50%",
            width: "200px",
          },
          "data-popper-placement": "bottom-start",
        }
      : {};
  };

  const handelOpen = () => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      setIsOpen(true);
      dispatch(show());
    }, 300);
  };

  const handelClose = () => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      setIsOpen(false);
      dispatch(hidden());
    }, 300);
  };

  return (
    <div
      onClick={() => (isOpen ? handelClose() : setIsOpen(true))}
      className="dropdown"
      onMouseLeave={handelClose}
      onMouseEnter={handelOpen}
    >
      <button
        className={`btn border-0 p-0 transparent-btn text-light dropdown-toggle ${
          isOpen ? "show" : ""
        }`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <span className="small">{t("header.account.title")}</span>
      </button>

      <ul
        className={`dropdown-menu ${style.dropdownMenu} ${
          isOpen ? "show" : ""
        }`}
        {...isOpenAttr()}
      >
        <Link locale={i18n.language} href="/signin">
          <p className="btn btn-warning cu-pointer d-block m-auto small w-fit my-2">
            {t("header.account.btns.signin")}
          </p>
        </Link>

        <p className="small text-muted ms-2 ps-1 mb-1 text-center">
          {t("header.account.btns.newCustomer.title")}{" "}
          <Link locale={i18n.language} href="/signup">
            <span className="btn-link text-primary cu-pointer p-0 small">
              {t("header.account.btns.newCustomer.btn")}
            </span>
          </Link>
        </p>
      </ul>
    </div>
  );
};

export default Languages;
