import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hidden as hideSlide } from "../../../store/AsideSlice";
import { hidden as hideBackDrop } from "../../../store/BackdropSlice";
import style from "../../../styles/layout.module.scss";

const Backdrop = () => {
  const { isShow } = useSelector(({ backdrop }) => backdrop);
  const { isShow: isSideShow } = useSelector(({ aSide }) => aSide);

  const dispatch = useDispatch();

  const closeSide = () => {
    if (!isSideShow) return;

    dispatch(hideSlide());
    dispatch(hideBackDrop());
  };

  return (
    <div
      onClick={closeSide}
      className={`${style.backdrop} ${isShow ? style.show : ""}`}
    />
  );
};

export default Backdrop;
