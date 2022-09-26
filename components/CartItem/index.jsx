import React from "react";

import GetStarts from "../GetStarts";
import Image from "next/image";
import Link from "next/link";

import { increseProductFromCart, delWithId } from "../../store/CartSlice";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("cart");

  const saveProduct = () => {
    dispatch(delWithId(product.id));

    toast.success(t("actions.save.click"), {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const delProduct = () => {
    dispatch(delWithId(product.id));

    toast.success(t("actions.delete.click"), {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const increseProductHandelar = (qty) => {
    dispatch(increseProductFromCart({ ...product, qty }));
  };

  return (
    <article className="mb-3 row bg-white w-100 pb-2 px-1">
      <Link locale={i18n.language} href={`/product/${product.id}`}>
        <div className="img flex-center bg-light col-3 position-relative cu-pointer">
          <Image height="200" width="160" src={product.thumbnail} alt="err" />
        </div>
      </Link>

      <div className="details col-9">
        <div className="name flex-between mb-2">
          <Link locale={i18n.language} href={`/product/${product.id}`}>
            <h2 className="fs-6 text-cut-1 pe-3 m-0 main-hover cu-pointer">
              {product.title}
            </h2>
          </Link>

          <p className="price m-0 fw-bold fs-5">${product.price}</p>
        </div>

        <div className="rate">
          <GetStarts item={product.rating} noUp small />
          <span className="ms-2 small">2000</span>
        </div>

        <div className={`actions flex-start align-items-center mt-4`}>
          <div className="qty pe-2 border-end">
            <div className="dropdown">
              <button
                style={{ backgroundColor: "#f0f2f2" }}
                className="btn small transparent-btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("qty", { amount: product.qty })}
              </button>

              <ul className="dropdown-menu">
                {[...Array(10)].map((_, idx) => (
                  <li
                    onClick={() => increseProductHandelar(idx + 1)}
                    key={idx}
                    className="dropdown-item cu-pointer"
                  >
                    {idx + 1}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="delete pe-2 ps-2 border-end">
            <button
              onClick={delProduct}
              className="btn btn-link p-0 text-decoration-none small"
            >
              {t("actions.delete.label")}
            </button>
          </div>

          <div className="save-for-later pe-2 ps-2">
            <button
              onClick={saveProduct}
              className="btn btn-link p-0 text-decoration-none small"
            >
              {t("actions.save.label")}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
