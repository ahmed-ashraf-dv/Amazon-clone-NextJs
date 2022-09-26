import React, { useState, useEffect } from "react";
import style from "../../styles/result.module.scss";

import GetStarts from "../GetStarts";

import { AiOutlineLeft } from "react-icons/ai";
import axios from "axios";

import { useTranslation } from "next-i18next";

const Filters = ({ setFilters }) => {
  const { t } = useTranslation("result");

  const [categories, setCategories] = useState({
    isLoading: false,
    filters: [
      {
        heading: "Customer Reviews",
        items: ["4*", "3*", "2*", "1*"],
      },
    ],
  });

  const handelFilter = ({ key, value, action = "add" }) => {
    key = key.heading.toLowerCase().replaceAll(" ", "");
    value = value?.includes("*") ? parseInt(value) : value;

    if (action === "add") {
      return setFilters((prev) => ({ ...prev, [key]: value }));
    }

    setFilters((prev) => ({ ...prev, [key]: "" }));
  };

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios("/api/getCategories");
      const categories = data.map((data) => data.title);

      const categoriesFilter = {
        heading: "Department",
        items: categories.slice(0, 5),
      };

      setCategories((prev) => ({
        isLoading: true,
        filters: [categoriesFilter, ...prev.filters],
      }));
    };

    getCategories();
  }, []);

  return (
    <article className="pb-5">
      {categories.isLoading ? (
        categories.filters.map((filter, idx) => (
          <article key={idx} className="department">
            <h2 className="fw-bold fs-6">
              {t("filter.heading." + filter.heading)}
            </h2>
            <p
              onClick={() => handelFilter({ key: filter, action: "clear" })}
              className="m-0 small cu-pointer text-muted"
            >
              <AiOutlineLeft /> {t("filter.clear")}
            </p>
            <ul className="list-unstyled small">
              {filter.items.map((item, idx) =>
                item === "*load...*" ? (
                  t("filter.loading")
                ) : (
                  <li
                    onClick={() => handelFilter({ key: filter, value: item })}
                    key={idx}
                    className={`my-2 cu-pointer w-fit ${style.listFilterItem}`}
                  >
                    {item.includes("*") ? <GetStarts item={item} /> : item}
                  </li>
                )
              )}
            </ul>
          </article>
        ))
      ) : (
        <div className="mt-5 pt-5 box w-100 flex-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">{t("layout:loading")}</span>
          </div>
        </div>
      )}
    </article>
  );
};

export default Filters;
