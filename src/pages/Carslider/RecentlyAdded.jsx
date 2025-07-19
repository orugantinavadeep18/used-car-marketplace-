// components/RecentlyAdded.jsx
import React from "react";
import { Link } from "react-router-dom";
import CarSlider from "./CarSlider";
import rate1 from  "../../assets/images/rate1.jpg"
import rate2 from  "../../assets/images/rate2.jpg"
import rate3 from  "../../assets/images/rate3.jpg"
import rate4 from  "../../assets/images/rate4.jpg"
import rate5 from  "../../assets/images/rate5.jpg"
import rate6 from  "../../assets/images/rate6.jpg"


export const recentlyAdded = [
  {
    name: "Vitara Brezza",
    location: "Malappuram",
    year: 2019,
    fuel: "Petrol",
    kms: "29,590 km",
    price: "₹ 9,30,000",
    img: rate1
  },
  {
    name: "Wagon R",
    location: "Malappuram",
    year: 2022,
    fuel: "Petrol",
    kms: "57,877 km",
    price: "₹ 5,40,000",
    img: rate2
  },
  {
    name: "Swift",
    location: "Pune",
    year: 2022,
    fuel: "Petrol",
    kms: "59,343 km",
    price: "₹ 7,06,000",
    img: rate3
  },
  {
    name: "Wagon R",
    location: "Pune",
    year: 2019,
    fuel: "CNG",
    kms: "95,877 km",
    price: "₹ 5,20,000",
    img: rate4
  },
  {
    name: "Swift Dzire",
    location: "Kaithal",
    year: 2015,
    fuel: "Petrol",
    kms: "1,06,852 km",
    price: "₹ 2,75,000",
    img: rate5
  },
  {
    name: "M 800",
    location: "Shillong",
    year: 2010,
    fuel: "Petrol",
    kms: "1,65,233 km",
    price: "₹ 1,00,000",
    img: rate6
  },
];

const RecentlyAdded = () => {
  return (
  <div className="flex justify-between items-center mb-4">
  <h2 className="text-2xl font-bold">Recently Added</h2>
  <Link to="/all-cars">
    <button className="text-white bg-[#003B9F] px-4 py-2 rounded">View All</button>
  </Link>
  </div>
  );
};

export default RecentlyAdded;
