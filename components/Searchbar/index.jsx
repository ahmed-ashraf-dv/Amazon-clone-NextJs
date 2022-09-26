import React, { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Dropdown from "./Dropdown";

import { useDispatch } from "react-redux";
import { show, hidden } from "../../store/BackdropSlice";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import request from "../../utils/request";
import Link from "next/link";

const options = [
  "All Departments",
  "Arts & Crafts",
  "Automotive",
  "Baby",
  "Beauty & Personal Care",
  "Books",
  "Boys' Fashion",
  "Computers",
  "Deals",
  "Digital Music",
  "Electronics",
  "Girls' Fashion",
  "Health & Household",
  "Home & Kitchen",
  "Industrial & Scientific",
  "Kindle Store",
  "Luggage",
  "Men's Fashion",
  "Movies & TV",
  "Music, CDs & Vinyl",
  "Pet Supplies",
  "Prime Video",
  "Software",
  "Sports & Outdoors",
  "Tools & Home Improvement",
  "Toys & Games",
  "Video Games",
  "Women's Fashion",
];

const Searchbar = () => {
  const { i18n } = useTranslation();

  const router = useRouter();
  const dispatch = useDispatch();
  const [currentSelect, setCurrentSelect] = useState(options[0]);
  const [searchQury, setSearchQury] = useState(router.query.query || "");

  const [keyWords, setKeyWords] = useState([]);
  const [isResultShow, setIsResultShow] = useState(false);

  const search = (e) => {
    e.preventDefault();

    if (searchQury) {
      router.push(`/result/${searchQury}`, `/result/${searchQury}`, {
        locale: i18n.language,
      });
    }
  };

  useEffect(() => {
    setSearchQury(router.query.query);
  }, [router.query.query]);

  const handelKeyWords = async () => {
    const { data: products } = await request(
      `/products/search?q=${(searchQury || "").trim()}&limit=100&select=title`
    );
    const keyWords = products?.products?.map((product) => product.title);

    const keyWordsSameCHR = keyWords.filter((title) => {
      return title
        .toLocaleLowerCase()
        .startsWith(searchQury || "".toLocaleLowerCase());
    });

    const firstTenResult = keyWordsSameCHR.slice(0, 10);

    setKeyWords(firstTenResult);
  };

  const handelFocus = () => {
    setIsResultShow(true);
    dispatch(show());
    handelKeyWords();
  };

  const handelChange = (e) => {
    setSearchQury(e.target.value);
    handelKeyWords();
  };

  const handelBlur = () => {
    setTimeout(() => setIsResultShow(false), 100);
    dispatch(hidden());
  };

  return (
    <form onSubmit={search}>
      <div className="input-group">
        <div
          style={{ overflow: "hidden" }}
          className="input-group-text p-0"
          id="basic-addon1"
        >
          <Dropdown
            currentSelect={currentSelect}
            options={options}
            setCurrentSelect={setCurrentSelect}
          />
        </div>
        <input
          onFocus={handelFocus}
          onBlur={handelBlur}
          value={searchQury || ""}
          onChange={handelChange}
          type="text"
          className="main-box-shadow form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

        {isResultShow && keyWords.length ? (
          <div
            style={{ zIndex: "999" }}
            className="helpWords border position-absolute end-0 top-100 bg-light rounded w-90"
          >
            <ul className="list-unstyled">
              {keyWords.map((title, idx) => (
                <Link
                  locale={i18n.language}
                  href={`/result/${title}`}
                  key={idx}
                >
                  <li className="cu-pointer text-dark px-4 py-2 background-hover">
                    {title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}

        <button
          className="input-group-text btn btn-warning fw-bold main-box-shadow"
          id="basic-addon1"
        >
          <BiSearchAlt2 size={23} color="#0F1111" />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
