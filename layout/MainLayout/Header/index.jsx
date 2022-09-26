import React from "react";
import style from "../../../styles/layout.module.scss";

import NavShop from "./NavShop";
import Logo from "../../../components/Logo";
import CountryDeliver from "../../../components/CountryDeliver";
import Searchbar from "../../../components/Searchbar";
import Account from "../../../components/Account";
import Cart from "../../../components/Cart";
import Languages from "../../../components/Languages";

const Header = () => {
  return (
    <>
      <nav
        className={`${style.header} navbar navbar-expand-lg navbar-dark bg-dark`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Logo />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center mb-2 mb-lg-0 w-100 justify-content-between">
              <div className="left-side flex-start flex-column flex-lg-row align-items-center w-100">
                <li className="nav-link text-light">
                  <CountryDeliver />
                </li>

                <li style={{ width: "90%" }} className="nav-link text-light">
                  <Searchbar />
                </li>
              </div>

              <div className="right-side flex-column flex-lg-row flex-start align-items-center">
                <li className="nav-link dropdown text-light">
                  <Languages />
                </li>
                <li className="nav-link dropdown text-light">
                  <Account />
                </li>
                <li className="nav-link text-light">
                  <Cart />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <NavShop />
    </>
  );
};

export default Header;
