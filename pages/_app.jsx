import { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import "../styles/global/globals.scss";
import "../styles/global/helper.scss";

import { store } from "../store";
import { hidden } from "../store/BackdropSlice";
import { hidden as hideAside } from "../store/AsideSlice";
import { Provider } from "react-redux";
import { getCountry } from "../store/UserSlice";
import { getCategories } from "../store/CategoriesSlice";

// polyfill
import { polyfill } from "smoothscroll-polyfill";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    polyfill();
  }, []);

  useEffect(() => {
    store.dispatch(hidden());
    store.dispatch(hideAside());
  }, [router.asPath]);

  useEffect(() => {
    if (store.getState().categories.isLoading) return;

    store.dispatch(getCategories());
  }, []);

  useEffect(() => {
    store.dispatch(getCountry());
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
};

export default appWithTranslation(MyApp);
