import React from "react";
import Slider from "react-slick";
import Reg from "../Assets/Reg.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={Reg} alt="" />
        </div>
        <div>
          <img src={Reg} alt={Reg} />
        </div>
        <div>
          <img src={Reg} alt="" />
        </div>
        {/* Add more image slides as needed */}
      </Slider>
    </div>
  );
}

export default SimpleSlider;

