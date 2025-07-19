// components/TopRated.jsx
import React from "react";
import CarSlider from "./CarSlider";
import { Link } from "react-router-dom";
import add1 from  "../../assets/images/add1.jpg"
import add2 from  "../../assets/images/add2.jpg"
import add3 from  "../../assets/images/add3.jpg"
import add4 from  "../../assets/images/add4.jpg"
import add5 from  "../../assets/images/add5.jpg"
import add6 from  "../../assets/images/add6.jpg"

export const topRated = [
  {
    name: "S-presso",
    location: "Kaithal",
    year: 2020,
    fuel: "Petrol",
    kms: "73,057 km",
    price: "₹ 3,05,000",
    img: add1
  },
  {
    name: "Benz",
    location: "Solan",
    year: 2020,
    fuel: "Petrol",
    kms: "77,299 km",
    price: "₹ 34,10,000",
    img: add2
  },
  {
    name: "Skoda",
    location: "Kaithal",
    year: 2015,
    fuel: "Petrol",
    kms: "1,06,852 km",
    price: "₹ 15,75,000",
    img: add3
  },
  {
    name: "Audi",
    location: "Malappuram",
    year: 2022,
    fuel: "Petrol",
    kms: "57,877 km",
    price: "₹ 23,40,000",
    img: add4
  },
  {
    name: "Thar",
    location: "Malappuram",
    year: 2019,
    fuel: "Petrol",
    kms: "29,590 km",
    price: "₹ 9,30,000",
    img: add5
  },
  {
    name: "Jeep",
    location: "Shillong",
    year: 2010,
    fuel: "Petrol",
    kms: "1,65,233 km",
    price: "₹ 11,00,000",
    img: add6
  },
];

const TopRated = () => {
  return (
   <div className="flex justify-between items-center mb-4">
  <h2 className="text-2xl font-bold">Top Rated</h2>
  <Link to="/all-cars">
    <button className="text-white bg-[#003B9F] px-4 py-2 rounded">View All</button>
  </Link>
</div>
  );
};

export default TopRated;
