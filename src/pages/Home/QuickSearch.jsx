import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // for navigation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import alto from "../../assets/cars/alto.png";
import audi from "../../assets/cars/audi.png";
import Baleno from "../../assets/cars/Baleno.png";
import benz from "../../assets/cars/benz.png";
import celerio from "../../assets/cars/celerio.png";
import ertiga from "../../assets/cars/ertiga.png";
import GV from "../../assets/cars/GV.png";
import ignis from "../../assets/cars/ignis.png";
import jimmy from "../../assets/cars/jimmy.png";
import nano from "../../assets/cars/nano.png";
import presso from "../../assets/cars/presso.png";
import skoda from "../../assets/cars/skoda.png";
import swift from "../../assets/cars/swift.png";
import Thar from "../../assets/cars/Thar.png";
import vb from "../../assets/cars/vb.png";
import wagnor from "../../assets/cars/wagnor.png";
import img from "../../assets/img.jpg";

const carModels = [
  { name: "Alto 800", image: alto },
  { name: "Audi", image: audi },
  { name: "Baleno", image: Baleno },
  { name: "Benz", image: benz },
  { name: "Celerio", image: celerio },
  { name: "Ertiga", image: ertiga },
  { name: "Grand Vitara", image: GV },
  { name: "Ignis", image: ignis },
  { name: "Jimny", image: jimmy },
  { name: "Nano", image: nano },
  { name: "S-Presso", image: presso },
  { name: "Skoda", image: skoda },
  { name: "Swift", image: swift },
  { name: "Thar", image: Thar },
  { name: "Vitara Brezza", image: vb },
  { name: "WagonR", image: wagnor },
];

// Custom Arrow Component
const Arrow = ({ onClick, direction }) => (
  <div
    className={`absolute top-1/2 -translate-y-1/2 z-10 p-2 cursor-pointer ${
      direction === "left" ? "left-0" : "right-0"
    }`}
    onClick={onClick}
    style={{ background: "transparent" }}
  >
    {direction === "left" ? (
      <FaChevronLeft className="text-3xl text-gray-600 hover:text-black" />
    ) : (
      <FaChevronRight className="text-3xl text-gray-600 hover:text-black" />
    )}
  </div>
);

const QuickSearch = () => {
  const [activeTab, setActiveTab] = useState("model");

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div
      className="w-full h-auto px-4 py-6 md:px-10 md:py-10 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 text-center md:text-left">
        Quick Search
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
        <button
          onClick={() => setActiveTab("model")}
          className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold text-sm sm:text-base ${
            activeTab === "model"
              ? "bg-blue-800 text-white"
              : "border border-white text-white"
          }`}
        >
          By Model
        </button>
        <button
          onClick={() => setActiveTab("budget")}
          className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold text-sm sm:text-base ${
            activeTab === "budget"
              ? "bg-blue-800 text-white"
              : "border border-white text-white"
          }`}
        >
          By Budget
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "model" ? (
        <Slider {...settings}>
          {carModels.map((car, index) => (
            <div key={index} className="p-2 sm:p-3">
              <Link
                to="/coming-soon"
                className="bg-white rounded-xl shadow-md p-3 sm:p-4 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-20 h-16 sm:w-28 sm:h-20 object-contain mb-2"
                />
                <span className="font-medium text-gray-800 text-xs sm:text-sm text-center">
                  {car.name}
                </span>
              </Link>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {["Less than ₹2L", "₹2L - ₹4L", "₹4L - ₹6L", "More than ₹6L"].map(
            (range, idx) => (
              <Link
                to="/coming-soon"
                key={idx}
                className="bg-gray-100 hover:bg-gray-200 hover:scale-105 hover:shadow-xl transform transition-all duration-300 p-4 sm:p-6 text-center rounded-xl font-semibold text-sm sm:text-lg text-gray-700"
              >
                {range}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default QuickSearch;
