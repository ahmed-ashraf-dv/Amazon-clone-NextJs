/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/home.module.scss";

const imgs = {
  dir: "/static/imgs/carosal",
  ext: "webp",
  num: 4,
};

const carosalBtnStyle = {
  height: "51%",
  width: "6%",
  filter: "invert(100%)",
};

const carosalStyle = {
  height: "455px",
  marginBottom: "-23vh",
  zIndex: "1",
  position: "relative",
};

const HomeCarosal = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
      style={carosalStyle}
    >
      <div
        style={{
          overflow: "unset !important",
        }}
        className="carousel-inner h-100"
      >
        {[...Array(imgs.num)].map((_, idx) => (
          <div key={idx} className={`carousel-item ${!idx ? "active" : ""}`}>
            <img
              src={`${imgs.dir}/0${idx + 1}.${imgs.ext}`}
              className="d-block w-100 img-fluid"
              alt="error"
            />
          </div>
        ))}
      </div>
      <button
        style={carosalBtnStyle}
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        style={carosalBtnStyle}
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeCarosal;
