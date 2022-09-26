import Link from "next/link";
import React from "react";

import AsideItem from "./AsideItem";
import { useTranslation } from "next-i18next";

const NextDrop = ({ back, currentSelect }) => {
  const { i18n } = useTranslation();

  return (
    <div className="nextDrop dropLeft bg-white w-100 scroll-auto">
      <AsideItem back onClick={back} title="MAIN MENU" />

      <hr className="mt-0" />
      {currentSelect && (
        <>
          <h5 className="text-cut-1 ps-3">{currentSelect.title}</h5>

          <ul className="list-unstyled">
            {currentSelect.items.map((item, idx) => (
              <Link locale={i18n.language} href={`/result/${item}`} key={idx}>
                <AsideItem title={item} />
              </Link>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default NextDrop;
