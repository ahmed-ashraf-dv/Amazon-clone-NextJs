import React, { useMemo } from "react";

import { useTranslation } from "next-i18next";

const Subtotal = ({ products }) => {
  const { t } = useTranslation("cart");

  const price = useMemo(() => {
    return products.reduce(
      (currentPrice, product) => (currentPrice += product.price * product.qty),
      0
    );
  }, [products]);

  return (
    <p className="fs-5">
      {t("subtotal", { amount: products.length })}
      <span className="fw-bold ms-1">${price}</span>
    </p>
  );
};

export default Subtotal;
