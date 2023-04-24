import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.scss";

const SimpleSlider = () => {
  const { activeCompany } = useSelector((state) => state.companies);
  const activeCompanyImg = activeCompany.thumbnails;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderSingleCompany = (img) => {
    if (!img) {
      return;
    }
    return img.map((item) => {
      return (
        <div className="slider" key={nanoid()}>
          <img src={item} className="slide" alt="" />
        </div>
      );
    });
  };

  const information = renderSingleCompany(activeCompanyImg);
  return (
    <div>
      <Slider {...settings}>{information}</Slider>
    </div>
  );
};

export default SimpleSlider;
