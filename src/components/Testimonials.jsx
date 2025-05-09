import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideData , settings } from "../data"; // Importing slide data from data.js

const Carousel = ({ slide, isDarkMode }) => {
  return (
    <>
      <section
        className={`flex border ml-5 ${
          isDarkMode
            ? "border-gray-700 bg-gray-800"
            : "border-slate-300 bg-white"
        } p-5 rounded-xl justify-center items-center flex-col gap-10`}
      >
        <div className="flex justify-center items-center">
          <img
            src={slide.img}
            alt={`${slide.title} profile`}
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <div className="text-center">
          <h1
            className={`text-xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {slide.title}
          </h1>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            {slide.subtitle}
          </p>
        </div>
        <div
          className={`${
            isDarkMode ? "bg-gray-600" : "bg-slate-300"
          } p-[0.7px] w-full`}
        />
        <div>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } text-center`}
          >
            {slide.desc}
          </p>
        </div>
      </section>
    </>
  );
};

const Testimonials = ({ isDarkMode }) => {
  return (
    <>
      <section
        className={`${
          isDarkMode ? "bg-gray-900" : ""
        } container mx-auto   lg:p-10 p-5 rounded-xl mt-10`}
      >
        <div className="lg:w-2/3 w-fit">
          <h1
            className={`text-3xl font-bold ${isDarkMode ? "text-white" : ""} `}
          >
            Testimonials
          </h1>
          <p
            className={`mt-2 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } text-4xl`}
          >
            <span className="text-gray-400 font-semibold">
              What our clients say about us
            </span>
          </p>
        </div>

        <div className="w-full">
          <div className="mt-10">
            <Slider {...settings}>
              {slideData.map((slide, index) => (
                <section key={index}>
                  <Carousel slide={slide} isDarkMode={isDarkMode} />
                </section>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
