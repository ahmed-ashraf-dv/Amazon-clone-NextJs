import React, { useState } from "react";

import Image from "next/image";
import GetStarts from "../GetStarts";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiTwotoneLock } from "react-icons/ai";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import { addToCart, increseProductFromCart } from "../../store/CartSlice";
import { useEffect } from "react";

import { useTranslation } from "next-i18next";

const activeImg = {
  boxShadow: "0 0 3px 2px rgb(228 121 17 / 50%)",
  borderColor: "#e77600",
};

const Product = ({ productData }) => {
  const { t } = useTranslation("product");

  const [currentImg, setCurrentImg] = useState(null);
  const user = useSelector(({ user }) => user);
  const cart = useSelector(({ cart }) => cart);

  const dispatch = useDispatch();

  const addToCartHandelar = () => {
    const isProdExist = cart.products.find((prod) => prod.id == productData.id);

    if (!isProdExist) {
      dispatch(addToCart(productData));
    } else {
      dispatch(increseProductFromCart(productData));
    }

    toast.success(t("successAddToCart"), {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    setCurrentImg(productData.thumbnail);
  }, [productData.thumbnail]);
  

  return (
    <article className="mb-3 pt-5 bg-white w-100 pb-2 px-1 pb-5">
      <div className="container-fluid">
        <div className="row flex-center">
          <div className="row col-lg-9">
            <div className="row imgs h-100 flex-start flex-column flex-lg-row-reverse col-lg-5 align-items-center">
              <div className="img flex-center bg-light mb-3 position-relative col-lg-9">
                <Image
                  height="320"
                  width="240"
                  src={currentImg || productData.thumbnail}
                  alt="err"
                />
              </div>

              <div className="box flex-center align-items-center gap-3 col-lg-3 flex-lg-column">
                {productData.images?.slice(0, 4)?.map((imgUrl, idx) => (
                  <div
                    style={imgUrl === currentImg ? activeImg : {}}
                    key={idx}
                    className="img"
                  >
                    <Image
                      height="100"
                      width="100"
                      src={imgUrl}
                      alt="err"
                      className="cu-pointer border"
                      onClick={() => setCurrentImg(imgUrl)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="details col-lg-7">
              <p className="fs-3 mt-3 m-0 cu-pointer">{productData.title}</p>

              <div className="rate">
                <GetStarts item={Math.round(productData.rating)} noUp />
                <span className="ms-2 small">2000</span>
              </div>

              <div className="price flex-start align-items-center fs-5 mt-2">
                <span className="flex-start fs-3 fw-bold">
                  <span>{productData.price}</span>
                  <span className="crancy" style={{ fontSize: "16px" }}>
                    $
                  </span>
                </span>
              </div>

              <div className="description small text-muted mt-2">
                {productData.description}
              </div>
            </div>
          </div>

          <div className="col-lg-3 mt-5 mt-lg-0">
            <div className="card-white bg-white border rounded p-2">
              <div className="price flex-start align-items-center fs-5">
                <span className="flex-start">
                  <span style={{ fontSize: "16px" }}>$</span>
                  <span className="fw-bold">{productData.price}</span>
                </span>
              </div>

              <div className="shuping small mt-2">
                <p className="flex-start align-items-center gap-1">
                  <HiOutlineLocationMarker size={18} /> {t("DeliverTo")}{" "}
                  <span className="fw-bold">
                    {!user.isLoading ? t("layout:loading") : user.countryData.countryName}
                  </span>
                </p>
              </div>

              <div className="btns my-4">
                <button
                  onClick={addToCartHandelar}
                  className="btn btn-warning w-100 mb-3"
                >
                  {t("btns.addToCart")}
                </button>
                <button
                  className="btn btn-warning w-100"
                  onClick={() => alert("Just For Design")}
                >
                  {t("btns.buyNow")}
                </button>
              </div>

              <p className="flex-start align-items-center gap-2">
                <AiTwotoneLock /> {t("secureTransaction")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;
