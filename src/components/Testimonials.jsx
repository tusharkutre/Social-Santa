import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

// slide data for carousel
const slideData = [
  {
    id: 1,
    img: user1,
    title: "Pranav Kavshik",
    subtitle: "Partner, Sr. Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  },
  {
    id: 2,
    img: user2,
    title: "Sarah Johnson",
    subtitle: "CEO, Tech Solutions",
    desc: "Working with Ajinkya Technologies has transformed our business operations. Their innovative solutions have helped us achieve remarkable growth.",
  },
  {
    id: 3,
    img: user3,
    title: "Michael Chen",
    subtitle: "CTO, Digital Innovations",
    desc: "The team at Ajinkya Technologies delivered exceptional results. Their expertise and dedication to quality is truly impressive.",
  },
];

var settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, // Enable auto slide play
  autoplaySpeed: 2000, // Set delay between slides in milliseconds
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false, // Hide arrows on small screens
        dots: true, // Show dots on small screens
        slidesToShow: 2, // Show only 2 slides on medium screens
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false, // Hide arrows on small screens
        dots: true, // Show dots on small screens
        slidesToShow: 1, // Show only 1 slide on small screens
        slidesToScroll: 1, // Scroll only 1 slide on small screens
        speed: 1000,
      },
    },
  ],
};

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
