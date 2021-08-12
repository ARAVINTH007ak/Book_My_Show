import React from "react";
import Slider from "react-slick";
import settings from "../../config/setting.cards";
import Poster from "../Poster/Poster.component";

function PosterSlider(props) {
  const sliderConfig = props.config ? props.config : settings;
  return (
    <>
      <h1
        className={`font-bold text-2xl px-3 ${
          props.isDark ? "text-white" : "text-gray-800"
        }`}
      >
        {props.heading}
      </h1>
      <p
        className={` text-sm px-3 ${
          props.isDark ? "text-white" : "text-gray-800"
        }`}
      >
        {props.subtitle}
      </p>
      <Slider {...sliderConfig}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
}

export default PosterSlider;
