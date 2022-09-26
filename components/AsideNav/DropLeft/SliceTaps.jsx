import React, { useState } from "react";
import AsideItem from "../AsideItem";

const SliceTaps = ({ tap, selectDrop, maxTaps }) => {
  const [isSlice, setIsSlice] = useState(true);

  return (
    <>
      {isSlice && tap.taps.length > maxTaps
        ? tap.taps
            .slice(0, maxTaps)
            .map((item, idx) => (
              <AsideItem
                key={idx}
                isBox
                title={item.title}
                onClick={() => selectDrop({ headId: tap.id, tapId: item.id })}
              />
            ))
        : tap.taps.map((item, idx) => (
            <AsideItem
              key={idx}
              isBox
              title={item.title}
              onClick={() => selectDrop({ headId: tap.id, tapId: item.id })}
            />
          ))}

      {tap.taps.length > maxTaps && (
        <AsideItem
          seeMore
          isSlice={isSlice}
          title={isSlice ? "See All" : "See Less"}
          onClick={() => setIsSlice((prev) => !prev)}
        />
      )}
    </>
  );
};

export default SliceTaps;
