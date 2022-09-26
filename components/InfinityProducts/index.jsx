import React, { useState, useEffect } from "react";
import ProductResult from "../ProductResult";

import { useTranslation } from "next-i18next";

const sortedFil = [
  "Avg. Customer Review",
  "Price: Low to High",
  "Price: High to Low",
];

const filterData = (data, filter) => {
  const { department, customerreviews } = filter;

  if (customerreviews) {
    const filter = data.filter((data) => data.rating >= customerreviews);

    return filter.sort((a, b) => b.rating - a.rating);
  }

  if (department) {
    return data.filter((product) => product.category == department);
  }

  return data;
};

const getDiscount = (price, discountPercentage) => {
  const disCountSize = Math.round(price * (discountPercentage / 100));

  return price - disCountSize;
};

const InfinityProducts = ({
  sortType,
  filters,
  ScrollElement,
  data,
  isLoading,
  isDataEnded,
}) => {
  const { t } = useTranslation("layout");

  const [allFilterData, setFilterData] = useState(null);

  useEffect(() => {
    if (!filters.department && !filters.customerreviews)
      return setFilterData(data);

    const filterdSata = filterData(data, filters);

    setFilterData(filterdSata);
  }, [filters, data]);

  // Sort Handelar
  useEffect(() => {
    setFilterData((prev) => {
      if (sortType == sortedFil[0]) {
        const sort = (data) => data.sort((a, b) => b.rating - a.rating);
        return prev?.length ? sort(prev) : sort(data);
      }

      if (sortType == sortedFil[1]) {
        const sort = (data) => {
          data.sort((a, b) => {
            return (
              getDiscount(a.price, a.discountPercentage) -
              getDiscount(b.price, b.discountPercentage)
            );
          });
        };
        return prev?.length ? sort(prev) : sort(data);
      }

      const sort = (data) => {
        data.sort((a, b) => {
          return (
            getDiscount(b.price, b.discountPercentage) -
            getDiscount(a.price, a.discountPercentage)
          );
        });
      };

      return prev?.length ? sort(prev) : sort(data);
    });
  }, [sortType, data]);

  return (
    <section>
      <h2 className="fs-3">{t("RESULTS")}</h2>

      <ScrollElement>
        {!data.length && isDataEnded ? (
          <article className="py-5 mt-5 flex-center">
            <h2 className="mt-5">{t("Not Found Anything")}</h2>
          </article>
        ) : (
          <>
            {allFilterData
              ? allFilterData?.map((product, idx) => (
                  <ProductResult product={product} key={idx} />
                ))
              : data?.map((product, idx) => (
                  <ProductResult product={product} key={idx} />
                ))}

            <div className={`loading ${isLoading ? "d-block" : "d-none"}`}>
              {t("loading")}
            </div>
          </>
        )}
      </ScrollElement>
    </section>
  );
};

export default InfinityProducts;
