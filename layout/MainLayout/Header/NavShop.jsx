import React, { useState, useEffect } from "react";
import style from "../../../styles/layout.module.scss";

import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { show as showSide } from "../../../store/AsideSlice";
import { show as showBackdrop } from "../../../store/BackdropSlice";
import Link from "next/link";

import { useTranslation } from "next-i18next";

const NavShop = () => {
  const { t, i18n } = useTranslation("layout");

  const dispatch = useDispatch();
  const categories = useSelector(({ categories }) => categories);

  const [taps, setTaps] = useState([{ title: "All", openaSide: true }]);

  useEffect(() => {
    if (!categories.isLoading || taps.length > 1) return;

    const newTaps = categories?.categories?.slice(0, 4).map((tap) => ({
      title: tap.title,
    }));

    setTaps((prev) => [...prev, ...newTaps]);
  }, [categories, taps]);

  const openaSide = () => {
    // open A side
    dispatch(showSide());

    // open Backdrop
    dispatch(showBackdrop());
  };

  return (
    <div className={style.navShop}>
      <div className="container-fluid">
        <div className="flex-start align-items-center flex-wrap">
          {taps.map((el, idx) =>
            el.openaSide ? (
              <p
                key={idx}
                className="m-0 py-1 px-1 my-1 mx-1 fw-semibold cu-pointer border-hover flex-center small text-white"
                onClick={openaSide}
              >
                {!idx && <GiHamburgerMenu className="me-2" size={20} />}{" "}
                {t("header.navShop." + el.title)}
              </p>
            ) : (
              <Link
                locale={i18n.language}
                key={idx}
                href={`/result/${el.title}`}
              >
                <p className="m-0 py-1 px-1 my-1 mx-1 fw-semibold cu-pointer border-hover flex-center small text-white">
                  {!idx && <GiHamburgerMenu className="me-2" size={20} />}{" "}
                  {el.title}
                </p>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NavShop;
