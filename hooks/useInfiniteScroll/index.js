/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";

const useInfiniteScroll = ({ getData, dependency }) => {
  const scrollElementRef = useRef();
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [isDataEnded, setIsDataEnded] = useState(false);
  const [isScroll, setIsScroll] = useState(true);
  const [isRequest, setisRequest] = useState(false);

  // Element
  const ScrollElement = (props) => {
    return (
      <div {...props} ref={scrollElementRef}>
        {props.children}
      </div>
    );
  };

  // Get Data
  useEffect(() => {
    // Check if loading or data end
    if (!isLoading || isDataEnded || isRequest || (page == 1 && data.length))
      return;

    const pageniationHandelar = async () => {
      setisRequest(true);
      const { data } = await getData(page);
      setisRequest(false);

      // Check if valid and exist array
      if (Array.isArray(data) && (!data || !data.length)) {
        setIsLoading(false);
        return setIsDataEnded(true);
      }
      // Check if valid and exist object
      if (typeof data === "object" && !Array.isArray(data) && data !== null) {
        setIsLoading(false);
        return setIsDataEnded(true);
      }
      // Add data
      setData((prev) => {
        if (Array.isArray(data)) return [...prev, ...data];
        return { ...prev, ...data };
      });
      setIsLoading(false);
      setIsScroll(true);
    };

    pageniationHandelar();
  }, [isLoading, isDataEnded, getData, page]);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      const elmentHeight = scrollElementRef.current?.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;

      const persent = (currentScroll * 100) / elmentHeight; // (%)

      // 80%
      if (persent >= 80 && isScroll) {
        setIsScroll(false);
        setIsLoading(true);
        setPage((prev) => prev + 1);
      }
    };
  }

  useEffect(() => {
    setData([]);
    setPage(1);
    setIsLoading(true);
    setIsDataEnded(false);
    setIsScroll(true);
  }, [...dependency]);

  return {
    ScrollElement,
    data,
    isLoading,
    isDataEnded,
    page,
  };
};

export default useInfiniteScroll;
