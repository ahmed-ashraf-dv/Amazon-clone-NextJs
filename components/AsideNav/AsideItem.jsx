import React from "react";

import {
  AiOutlineRight,
  AiOutlineDown,
  AiOutlineArrowLeft,
  AiOutlineLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import style from "../../styles/layout.module.scss";

import { useTranslation } from "next-i18next";

const AsideItem = ({ onClick, title, isBox, back, isSlice, seeMore }) => {
  const { t, i18n } = useTranslation("layout");

  return (
    <li
      className={`small text-cut-1 px-3 py-3 cu-pointer fw-bolder ${style.sideItem} flex-between align-items-center`}
      onClick={onClick}
    >
      {isBox ? (
        <>
          <span className="title text-cut-1">
            {t("aSideNav.titles." + title)}
          </span>

          <span className="select">
            {i18n.dir(i18n.language) === "rtl" ? (
              <AiOutlineLeft size={19} />
            ) : (
              <AiOutlineRight size={19} />
            )}
          </span>
        </>
      ) : back ? (
        <div className="flex-start align-items-center fs-5">
          {i18n.dir(i18n.language) === "rtl" ? (
            <AiOutlineArrowRight size={19} />
          ) : (
            <AiOutlineArrowLeft size={19} />
          )}
          <p className="m-0 ms-2 fs-6">{t("aSideNav.titles." + title)}</p>
        </div>
      ) : seeMore ? (
        <div className="flex-start align-items-center">
          <p className="m-0 me-2 fs-6">{t("aSideNav.items." + title)}</p>
          <AiOutlineDown
            style={{
              transition: ".3s",
              transform: `rotate(${isSlice ? "0deg" : "180deg"})`,
            }}
            size={19}
          />
        </div>
      ) : (
        t("aSideNav.items." + title)
      )}
    </li>
  );
};

export default AsideItem;
