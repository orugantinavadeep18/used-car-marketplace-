// components/CarSlider.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShareAlt ,FaStar } from "react-icons/fa";
import {recentlyAdded} from "../Carslider/RecentlyAdded"
import {topRated} from "../Carslider/TopRated"
import AllCars from "./AllCars";

const CarCard = ({ car }) => (
  <div className="w-[210px] sm:w-[240px] md:w-[260px] border rounded-md shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 bg-white flex-shrink-0 text-xs">
    <div className="relative">
      <img
        src={car.img}
        alt={car.name}
        className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-t-md transform hover:scale-105 transition duration-300"
      />
      <FaShareAlt className="absolute top-1 right-1 text-white bg-black/50 p-1 rounded-full text-xs" />
    </div>

    <div className="text-center text-[10px] py-1 border-t text-gray-700 font-medium">
      Certified | 3 Free Service
    </div>

    <div className="p-2">
      <h2 className="font-semibold text-sm">{car.name}</h2>
      <p className="text-[11px] text-gray-500">{car.location}</p>
      <p className="text-[10px] text-gray-600">
        {car.year} | {car.fuel} | {car.kms}
      </p>
      <p className="text-blue-800 font-bold text-sm mt-1">{car.price}</p>

      <div className="flex justify-between gap-1 mt-2">
        <button className="flex-1 bg-blue-800 text-white text-[10px] py-1 rounded hover:bg-blue-900">
          Contact
        </button>
        <button className="flex-1 bg-red-600 text-white text-[10px] py-1 rounded hover:bg-red-700">
          Test Drive
        </button>
      </div>
    </div>
  </div>
);

const CarSlider = ({ cars }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 p-2">
        {cars.map((car, index) => (
          <div
            key={index}
            className="min-w-[260px] sm:min-w-[280px] max-w-[320px] bg-white rounded-md border shadow-md hover:shadow-lg transition-all flex-shrink-0"
          >
            {/* Image */}
            <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden rounded-t-md">
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Warranty Tag */}
              <div className="absolute bottom-0 w-full bg-white text-xs text-center py-1 border-t text-black font-medium">
                {car.year >= 2020
                  ? "1 Year Warranty"
                  : "6 Months Warranty"}{" "}
                | 3 Free Service
              </div>
            </div>

            {/* Car Info */}
            <div className="p-3">
              <h3 className="text-base font-semibold">{car.name}</h3>
              <p className="text-sm text-gray-500">{car.location}</p>
              <p className="text-xs text-gray-500 mt-1">
                {car.year} | {car.fuel} | {car.kms}
              </p>

              {/* Compare & Rating */}
              <div className="flex items-center justify-between mt-2 text-sm">
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  Compare
                </label>
                <div className="flex text-blue-600 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-xs" />
                  ))}
                </div>
              </div>

              {/* Price */}
              <p className="mt-2 text-xl font-bold text-[#003B9F]">
                {car.price}
              </p>

              {/* Buttons */}
              <div className="flex justify-between mt-2">
                <button className="bg-[#003B9F] hover:bg-blue-800 text-white text-xs px-3 py-1 rounded">
                  Contact Dealer
                </button>
                <button className="bg-[#E53935] hover:bg-red-600 text-white text-xs px-3 py-1 rounded">
                  Test Drive
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSlider;
