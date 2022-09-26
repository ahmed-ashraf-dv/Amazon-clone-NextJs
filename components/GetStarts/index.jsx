import React from "react";
import { useMemo } from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

import { useTranslation } from "next-i18next";

const GetStarts = ({ item, noUp, small }) => {
  const { t } = useTranslation("layout");

  const numOfStars = useMemo(
    () => (!isNaN(+item) ? item : parseInt(item)),
    [item]
  );

  return (
    <>
      {[...Array(5)].map((_, idx) =>
        idx + 1 <= Math.round(numOfStars) ? (
          <AiTwotoneStar key={idx} size={small ? 15 : 18} color="#ffa41c" />
        ) : (
          <AiOutlineStar key={idx} size={small ? 15 : 18} color="#ffa41c" />
        )
      )}
      {!noUp && (
        <span>
          {" "}
          {"&"} {t("stars.up")}
        </span>
      )}
    </>
  );
};

export default GetStarts;
