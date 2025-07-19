import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../Footer";

const SellCarDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sellerInfo = location.state || {}; // Comes from CarSearchBox

  const [carDetails, setCarDetails] = useState({
    make: "",
    model: "",
    year: "",
    fuelType: "",
    kmsDriven: "",
    price: "",
    location: "",
    image: "",
  });

  const handleChange = (e) => {
    setCarDetails({
      ...carDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const completeData = {
      ...sellerInfo,
      ...carDetails,
    };

    console.log("Submitted Car Info:", completeData);
    alert("Car listing submitted successfully!");

    // Navigate to Home or some confirmation page
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-cover bg-center  bg-gradient-to-r  from-black to-blue-950 ">
        <Navbar/>
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#1E2A78]">Enter Your Car Details</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="make"
          value={carDetails.make}
          onChange={handleChange}
          placeholder="Car Make (e.g., Maruti)"
          className="border p-3 rounded"
          required
        />
        <input
          type="text"
          name="model"
          value={carDetails.model}
          onChange={handleChange}
          placeholder="Car Model (e.g., Swift)"
          className="border p-3 rounded"
          required
        />
        <input
          type="number"
          name="year"
          value={carDetails.year}
          onChange={handleChange}
          placeholder="Year of Purchase"
          className="border p-3 rounded"
          required
        />
        <select
          name="fuelType"
          value={carDetails.fuelType}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        >
          <option value="">Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <input
          type="number"
          name="kmsDriven"
          value={carDetails.kmsDriven}
          onChange={handleChange}
          placeholder="KMs Driven"
          className="border p-3 rounded"
          required
        />
        <input
          type="number"
          name="price"
          value={carDetails.price}
          onChange={handleChange}
          placeholder="Expected Price (INR)"
          className="border p-3 rounded"
          required
        />
        <input
          type="text"
          name="location"
          value={carDetails.location}
          onChange={handleChange}
          placeholder="City/Location"
          className="border p-3 rounded"
          required
        />
        <input
          type="text"
          name="image"
          value={carDetails.image}
          onChange={handleChange}
          placeholder="Image URL (optional)"
          className="border p-3 rounded"
        />

        <div className="col-span-1 md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-[#1E2A78] text-white px-6 py-3 rounded hover:bg-blue-800"
          >
            Submit Listing
          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default SellCarDetails;
