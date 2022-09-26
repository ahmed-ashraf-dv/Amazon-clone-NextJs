/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

import style from "../../styles/layout.module.scss";
import { useTranslation } from "next-i18next";

const Logo = ({ color, size }) => {
  const { i18n } = useTranslation();

  return (
    <Link locale={i18n.language} href="/">
      <div className={`${style.logo} cu-pointer`}>
        <img
          width={size || 80}
          src={`/static/imgs/larg-logo${color ? `-${color}` : ""}.png`}
          alt=""
        />
      </div>
    </Link>
  );
};

export default Logo;
