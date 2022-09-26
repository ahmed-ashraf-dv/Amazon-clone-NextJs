import React from "react";

import Backdrop from "./MainLayout/Backdrop";
import Footer from "./MainLayout/Footer";
import Header from "./MainLayout/Header";
import AsideNav from "../components/AsideNav";

const Layout = ({ children, bg }) => {
  return (
    <>
      <Header />
      <Backdrop />
      <AsideNav />
      <article style={{ background: bg || "transaprent" }}>{children}</article>
      <Footer />
    </>
  );
};

export default Layout;
