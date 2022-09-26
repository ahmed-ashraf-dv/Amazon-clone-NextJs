import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useSelector } from "react-redux";

import style from "../../styles/layout.module.scss";
import { useTranslation } from "next-i18next";

const CountryDeliver = () => {
  const { t } = useTranslation("layout");
  const { countryData, isLoading } = useSelector(({ user }) => user);

  return (
    <div className={style.countryDeliver + " cu-pointer"}>
      <div className="row align-items-end">
        <div className="logo col-2 flex-star">
          <HiOutlineLocationMarker color="#fff" size={18} />
        </div>

        <div className="country col-9 lh-sm ps-2">
          <p className="m-0 p-0 ps-1 text-muted-light small">
            {t("header.countryDeliver.DeliverTo")}
          </p>
          <p className={`m-0 p-0 fw-bold ${style.countryName}`}>
            {!isLoading ? t("loading") : countryData.countryName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDeliver;
