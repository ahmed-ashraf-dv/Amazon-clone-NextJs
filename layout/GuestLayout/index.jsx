import React from "react";
import Logo from "../../components/Logo";
import Footer from "./Footer";

const GuestLayout = ({ children }) => {
  return (
    <section>
      <header className="flex-center p-3 bg-white">
        <Logo size={100} color="black" />
      </header>
      <div className="main bg-white border-bottom">{children}</div>
      <Footer />
    </section>
  );
};

export default GuestLayout;
