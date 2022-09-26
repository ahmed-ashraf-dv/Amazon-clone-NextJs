/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";

import Layout from "../../layout";
import Head from "next/head";
import Subtotal from "../../components/Subtotal";
import CartItem from "../../components/CartItem";
import NominationItem from "../../components/NominationItem";
import EmptyCart from "../../components/EmptyCart";

import { useSelector } from "react-redux";
import request from "../../utils/request";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const shuffle = (arr) => {
  const array = [...arr];

  return array.sort(() => Math.random() - 0.5);
};

const Cart = () => {
  const { t } = useTranslation("cart");

  const [nominationProd, setNominationProd] = useState({
    products: false,
    data: [],
  });

  const cart = useSelector(({ cart }) => cart);

  useEffect(() => {
    const getProducts = async () => {
      let { data: products } = await request("/products?limit=50");

      products = shuffle(products.products).slice(0, 5);

      setNominationProd({
        products,
        isLoading: true,
      });
    };

    getProducts();
  }, []);

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <Layout>
        <div className="container-fluid pb-5 mb-5">
          <div className="row">
            <div className="products pe-2 col-lg-8">
              <div className="products-card bg-white mt-4 mb-4 py-5 px-3">
                {!cart.products.length ? (
                  <EmptyCart />
                ) : (
                  cart.products.map((product, idx) => (
                    <div key={idx} className="products">
                      <CartItem product={product} />
                    </div>
                  ))
                )}
              </div>

              <p
                dangerouslySetInnerHTML={{ __html: t("cartDiscraption") }}
                className="small text-muted mb-5 pb-5"
              />
            </div>

            <div className="details col-lg-4">
              {/* is products */}
              {cart.products.length > 0 && (
                <div className="products bg-white py-3 px-3 mt-4">
                  <Subtotal products={cart.products} />

                  <button
                    onClick={() => alert("Just For Design")}
                    className="py-1 btn btn-warning rounded m-auto d-block w-100 mt-4"
                  >
                    {t("proceedToCheckout")}
                  </button>
                </div>
              )}

              <div className="nomination bg-white py-3 mt-3">
                <p className="small text-muted m-0 ps-2 mb-2 fw-bold">
                  {t("yourRecentlyViewedItems")}
                </p>

                <div className="products py-2 px-3">
                  {nominationProd.isLoading
                    ? nominationProd.products.map((product, idx) => (
                        <NominationItem key={idx} product={product} />
                      ))
                    : [...Array(5)].map((_, idx) => (
                        <NominationItem key={idx} loading />
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["cart", "layout"])),
      locale,
    },
  };
};

export default Cart;
