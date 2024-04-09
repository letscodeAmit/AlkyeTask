import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

export default function ImageSlider() {
  const sliderRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img
            src="/Dashboard_background.png"
            alt="Slide 1"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <img
            src="/company-5.jpg"
            alt="Slide 2"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <img
            src="/company-4.jpg"
            alt="Slide 3"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <img
            src="/Rectangle 30.png"
            alt="Slide 4"
            className="w-full h-full object-contain"
          />
        </div>
      </Slider>

      <div className="absolute bottom-4 lg:bottom-28 mx-4 lg:mx-20 text-white font-extralight">
        <div className="">
          <div className="font-inter text-white text-xs lg:text-xl">
            Home / Why work with us
          </div>
          <div className="text-white font-bold text-2xl">
            Headline #1
          </div>
          <div className="font-inter text-white my-2 text-xs lg:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit..
          </div>
        </div>
      </div>

      <div className="flex flex-row absolute bottom-14 right-4 md:right-12 mt-2 md:mt-[10%] lg:bottom-32 ">
        <button
          className="text-white rounded-full p-2"
          onClick={handlePrevious}
        >
          <CircleChevronLeft
            color="#ffffff"
            height="37.5px"
            width="41.67"
            strokeWidth={1}
          />
        </button>
        <button className=" text-white rounded-full p-2" onClick={handleNext}>
          <CircleChevronRight
            color="#ffffff"
            height="37.5px"
            width="41.67"
            strokeWidth={1}
          />
        </button>
      </div>
    </div>
  );
}
