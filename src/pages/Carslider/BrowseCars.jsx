import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { recentlyAdded } from "./RecentlyAdded";
import { topRated } from "../Carslider/TopRated";
import Navbar from "../../components/Navbar";
import Footer from "../Footer";
import { useCart } from "../Home/CartContext";

const allCars = [...recentlyAdded, ...topRated];

const BrowseCars = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("search")?.toLowerCase() || "";

  const [filteredCars, setFilteredCars] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const results = allCars.filter((car) => {
      return (
        car.name.toLowerCase().includes(search) ||
        car.make?.toLowerCase().includes(search) ||
        car.model?.toLowerCase().includes(search) ||
        car.year?.toString().includes(search) ||
        car.price?.toString().includes(search) ||
        car.location?.toLowerCase().includes(search)
      );
    });
    setFilteredCars(results);
  }, [search]);

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gradient-to-b from-black via-gray-600 to-gray-800 min-h-screen">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Search Results for: "<span className="text-blue-400">{search}</span>"
        </h2>
        <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2">
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded shadow hover:shadow-lg transition-transform hover:-translate-y-1"
              >
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-44 object-cover rounded-md mb-2"
                />
                <h2 className="font-semibold">{car.name}</h2>
                <p className="text-gray-500 text-sm">
                  {car.year} | {car.fuel} | {car.kms}
                </p>
                <p className="text-blue-700 font-bold">{car.price}</p>
                <button
                  onClick={() => addToCart(car)}
                  className="mt-2 bg-blue-600 text-white w-full py-1 rounded hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-white">No cars found.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};



export default BrowseCars;
