import React, { Fragment } from "react";
import SliceTaps from "./SliceTaps";
import style from "../../../styles/layout.module.scss";

import { useTranslation } from "next-i18next";

const maxTaps = 4;
const DropLeft = ({ taps, selectDrop }) => {
  const { t } = useTranslation("layout");

  return (
    <div className="dropLeft bg-white pt-4 w-100 scroll-auto">
      {taps.map((tap, idx) => (
        <Fragment key={idx}>
          {idx ? <hr /> : ""}

          <h5 className="text-cut-1 ps-3">
            {t("aSideNav.headings." + tap.heading)}
          </h5>
          <ul className={`list-unstyled ${style.itemsBox}`}>
            <SliceTaps maxTaps={maxTaps} tap={tap} selectDrop={selectDrop} />
          </ul>
        </Fragment>
      ))}
    </div>
  );
};

export default DropLeft;
