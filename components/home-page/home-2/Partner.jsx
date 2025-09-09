"use client";

import Slider from "react-slick";

const Partner = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  };

  const partnerLogos = [
    "/images/logo/Plogo-23.png",
    "/images/logo/Plogo-24.png",
    "/images/logo/Plogo-25.png",
    "/images/logo/Plogo-26.png",
    "/images/logo/Plogo-27.png",
    "/images/logo/Plogo-28.png",
    "/images/logo/Plogo-29.png", 
    "/images/logo/Plogo-30.png",
  ];

  return (
    <Slider {...settings} arrows={false}>
      {partnerLogos.map((logo, index) => (
        <div className="item" key={index}>
          <img src={logo} alt="" style={{
          width: "120px",   // ✅ pick a consistent width
          height: "60px",   // ✅ pick a consistent height
          objectFit: "contain",
        }} />
        </div>
      ))}
    </Slider>
  );
};

export default Partner;
