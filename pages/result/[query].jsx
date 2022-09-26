import React, { useState } from "react";

import Head from "next/head";
import Layout from "../../layout";
import Filters from "../../components/Filters";
import InfinityProducts from "../../components/InfinityProducts";

import style from "../../styles/result.module.scss";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import request from "../../utils/request";

const sortedFil = [
  "Avg. Customer Review",
  "Price: Low to High",
  "Price: High to Low",
];

const Query = () => {
  const { t } = useTranslation("result");

  const { query } = useRouter();
  const [sortType, setSortType] = useState(sortedFil[0]);

  const [filters, setFilters] = useState({
    department: "",
    customerreviews: "",
  });

  const { ScrollElement, data, isLoading, isDataEnded } = useInfiniteScroll({
    getData: async (page) => {
      const limit = 20;

      const { data } = await request(
        `/products/search?q=${query.query}&limit=${limit}&skip=${
          (page - 1) * limit
        }`
      );

      return { data: data?.products };
    },
    dependency: [query.query, filters],
  });

  return (
    <section className={`bg-white ${style.resultPage}`}>
      <Head>
        <title>{t("title", { query: query?.query || "" })}</title>
      </Head>

      <Layout>
        <div className="nav boredr bg-light flex-between align-items-center shadow">
          <p className="m-0 py-2 fw-semibold small ps-4">
            {t("resultCount", { num: "1-16", over: "100,000" })}{" "}
            <span className="text-danger">{`"${query.query}"`}</span>
          </p>

          <div className="dropdown me-4 small">
            <button
              className="border shadow my-2 dropdown-toggle rounded px-2 py-1"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {t("sortBy")}:{" "}
              <span className="ps-1">
                {t("sortedFil." + sortType || sortedFil[0])}
              </span>
            </button>

            <ul className="dropdown-menu">
              {sortedFil.map((item, idx) => (
                <li
                  className="dropdown-item cu-pointer"
                  key={idx}
                  onClick={() => setSortType(item)}
                >
                  {t("sortedFil." + item.replace(":", " -"))}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${style.resultPage} container-fluid pt-3`}>
          <div className="row">
            <div className="col-md-3">
              <Filters setFilters={setFilters} />
            </div>

            <div className="col-md-9 pb-5">
              <InfinityProducts
                sortType={sortType}
                filters={filters}
                ScrollElement={ScrollElement}
                data={data}
                isLoading={isLoading}
                isDataEnded={isDataEnded}
              />
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Query;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["result", "layout"])),
    },
  };
};
