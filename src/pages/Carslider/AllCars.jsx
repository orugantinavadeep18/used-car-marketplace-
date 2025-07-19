import React from "react";
import { recentlyAdded } from "./RecentlyAdded";
import { topRated } from "../Carslider/TopRated";
import Navbar from "../../components/Navbar";
import Footer from "../Footer";
import { useCart } from "../Home/CartContext"; // ✅ Import useCart hook

const allCars = [...recentlyAdded, ...topRated];

const AllCars = () => {
  const { addToCart } = useCart(); // ✅ Destructure addToCart from context

  return (
    <div>
      <Navbar />
      <div className="bg-black min-h-screen px-6 py-10">
        <h1 className="text-3xl text-white font-semibold mb-6">
          All Available Cars
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allCars.map((car, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-40 object-cover rounded-md mb-3 hover:scale-105 transition-transform"
              />
              <h2 className="font-semibold text-lg">{car.name}</h2>
              <p className="text-gray-600 text-sm mb-1">
                {car.year} | {car.fuel} | {car.kms}
              </p>
              <p className="text-blue-700 font-bold mb-3">{car.price}</p>
              <button
                onClick={() => addToCart({ id: index, ...car })}
                className="w-full bg-[#1E2A78] text-white py-2 rounded-md hover:bg-blue-900 transition-colors text-sm font-medium"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllCars;
