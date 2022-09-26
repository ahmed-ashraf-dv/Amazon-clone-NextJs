import React, { useState } from "react";

import style from "../../styles/layout.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { hidden as hideSide } from "../../store/AsideSlice";
import { hidden as hideBackDrop } from "../../store/BackdropSlice";

import DropLeft from "./DropLeft";
import NextDrop from "./NextDrop";

import { useTranslation } from "next-i18next";

const taps = [
  {
    id: 1,
    heading: "Digital Content & Devices",
    taps: [
      {
        id: 1,
        title: "Amazon Music",
        items: [
          "Amazon Music Unlimited",
          "Free Streaming Music",
          "Podcasts",
          "Play Music",
          "Open Web Player",
        ],
      },
      {
        id: 2,
        title: "Kindle E-readers & Books",
        items: [
          "Kindle Kids",
          "Kindle",
          "Kindle Paperwhite",
          "Kindle Oasis",
          "See all Kindle E-Readers",
        ],
      },
      {
        id: 3,
        title: "Appstore for Android",
        items: [
          "All Apps and Games",
          "Games",
          "Amazon Coins",
          "Download Amazon Appstore",
          "Amazon Apps",
        ],
      },
    ],
  },
  {
    id: 2,
    heading: "Shop By Department",
    taps: [
      {
        id: 1,
        title: "Electronics",
        items: [
          "Accessories & Supplies",
          "Camera & Photo",
          "Car & Vehicle Electronics",
          "Cell Phones & Accessories",
        ],
      },
      {
        id: 2,
        title: "Computers",
        items: [
          "Computer Accessories & Peripherals",
          "Computer Components",
          "Computers & Tablets",
          "Data Storage",
          "External Components",
        ],
      },
      {
        id: 3,
        title: "Arts & Crafts",
        items: [
          "Painting, Drawing & Art Supplies",
          "Beading & Jewelry Making",
          "Crafting",
          "Fabric",
          "Fabric Decorating",
          "Party Decorations & Supplies",
        ],
      },
      {
        id: 4,
        title: "Automotive",
        items: [
          "Car Care",
          "Car Electronics & Accessories",
          "Exterior Accessories",
          "Interior Accessories",
          "Lights & Lighting Accessories",
        ],
      },
      {
        id: 5,
        title: "Baby",
        items: [
          "Activity & Entertainment",
          "Apparel & Accessories",
          "Baby & Toddler Toys",
          "Baby Care",
          "Baby Stationery",
        ],
      },
      {
        id: 6,
        title: "Luggage",
        items: ["Carry-ons", "Backpacks"],
      },
      {
        id: 7,
        title: "Boys' Fashion",
        items: ["Clothing", "Shoes"],
      },
      {
        id: 8,
        title: "Men's Fashion",
        items: ["Clothing", "Shoes", "Watches"],
      },
    ],
  },
  {
    id: 3,
    heading: "Programs & Features",
    taps: [
      {
        id: 1,
        title: "Gift Cards",
        items: [
          "All gift cards",
          "eGift cards",
          "Gift cards by mail",
          "Specialty gift cards",
        ],
      },
      {
        id: 2,
        title: "Amazon Live",
        items: ["Live", "Recently Live"],
      },
      {
        id: 3,
        title: "International Shopping",
        items: ["Where we ship", "Visit Amazon Global"],
      },
      {
        id: 4,
        title: "Health and Household",
        items: ["Baby & Child Care", "Health Care"],
      },
      {
        id: 5,
        title: "Home and Kitchen",
        items: ["Kids' Home Store", "Kitchen & Dining"],
      },
      {
        id: 6,
        title: "Industrial and Scientific",
        items: [
          "Abrasive & Finishing Products",
          "Additive Manufacturing Products",
        ],
      },
      {
        id: 7,
        title: "Movies & Television",
        items: ["Movies", "TV Shows"],
      },
      {
        id: 8,
        title: "Pet supplies",
        items: ["Dogs", "Cats"],
      },
    ],
  },
];

const AsideNav = () => {
  const { t, i18n } = useTranslation("layout");

  const dispatch = useDispatch();
  const { isShow } = useSelector(({ aSide }) => aSide);

  const [isDropStepTow, setIsDropStepTow] = useState(false);
  const [currentSelect, setCurrentSelect] = useState(null);

  const clsoeSide = () => {
    dispatch(hideSide());
    dispatch(hideBackDrop());
  };

  const selectDrop = ({ headId, tapId }) => {
    const currentHead = taps.find((tap) => tap.id === headId);
    const currentTap = currentHead.taps.find((tap) => tap.id === tapId);

    setCurrentSelect(currentTap);
    setIsDropStepTow(true);
  };

  const back = () => {
    setIsDropStepTow(false);
    setCurrentSelect(null);
  };

  return (
    <article
      className={`${style.aSide} ${style[i18n.dir(i18n.language)]} ${
        isShow ? style.active : ""
      } bg-dark shadow`}
    >
      <div className="header flex-between align-items-center px-3">
        <p className="text-light px-2 fs-4 mt-3">{t("aSideNav.title")}</p>

        <button
          type="button"
          className="cu-pointer btn-close btn-close-white"
          aria-label="Close"
          onClick={clsoeSide}
        />
      </div>

      <div
        className={`${style.boxDrops} ${
          isDropStepTow ? style.next : ""
        } d-flex scroll-auto pb-5`}
      >
        {/* Step 1 */}
        <DropLeft taps={taps} selectDrop={selectDrop} />

        {/* Step 2 */}
        <NextDrop back={back} currentSelect={currentSelect} />
      </div>
    </article>
  );
};

export default AsideNav;
