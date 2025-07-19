import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CarSearchBox = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [formData, setFormData] = useState({
    registration: "",
    name: "",
    mobile: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBuySearch = () => {
    navigate("/all-cars");
  };

  const handleSellNext = () => {
    if (formData.registration && formData.name && formData.mobile) {
      navigate("/sell-car-details", { state: formData });
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <div className="hidden md:block relative top-7 w-[100vw] max-w-6xl mx-auto">
      {/* Tabs */}
      <div className="absolute -top-6 left-6 flex space-x-0 z-50">
        <div className="relative">
          <button
            onClick={() => setActiveTab("buy")}
            className={`w-[175px] h-[58px] text-sm font-bold rounded-t-lg ${
              activeTab === "buy"
                ? "bg-[#1E2A78] text-white"
                : "bg-[#E53935] text-white"
            }`}
          >
            BUY
          </button>
          {activeTab === "buy" && (
            <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-4 h-3 bg-[#1E2A78] rotate-45 z-10"></div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setActiveTab("sell")}
            className={`w-[175px] h-[58px] text-sm font-bold rounded-t-lg ${
              activeTab === "sell"
                ? "bg-[#1E2A78] text-white"
                : "bg-[#E53935] text-white"
            }`}
          >
            SELL
          </button>
          {activeTab === "sell" && (
            <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-4 h-3 bg-[#1E2A78] rotate-45 z-10"></div>
          )}
        </div>
      </div>

      {/* Content Box */}
      <div className="bg-white rounded-xl shadow-lg px-14 absolute top-1 pt-15 pb-14 z-40">
        {activeTab === "buy" ? (
          <div className="flex flex-wrap gap-4 items-center">
            <select className="flex-1 border rounded-md px-4 py-2 min-w-[150px] text-sm">
              <option>Select Model</option>
              <option>Swift</option>
              <option>Baleno</option>
            </select>

            <select className="flex-1 border rounded-md px-4 py-2 min-w-[150px] text-sm">
              <option>Select Budget</option>
              <option>5-10 Lakh</option>
              <option>10-15 Lakh</option>
            </select>

            <select className="flex-1 border rounded-md px-4 py-2 min-w-[150px] text-sm">
              <option>Select City</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
            </select>

            <button
              onClick={handleBuySearch}
              className="flex-1 min-w-[120px] bg-[#1E2A78] text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-800 text-sm"
            >
              SEARCH
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 items-center">
            <input
              name="registration"
              value={formData.registration}
              onChange={handleInputChange}
              className="flex-1 border rounded-md px-4 py-2 min-w-[150px] text-sm"
              placeholder="Registration Number*"
              required
            />
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="flex-1 border rounded-md px-4 py-2 min-w-[150px] text-sm"
              placeholder="Name*"
              required
            />
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="flex-1 border rounded-md px-4 py-2 min-w-[150px] text-sm"
              placeholder="Mobile*"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="flex-1 border rounded-md px-4 py-2 min-w-[150px] text-sm"
              placeholder="Email Address"
            />
            <button
              onClick={handleSellNext}
              className="flex-1 min-w-[120px] bg-[#1E2A78] text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-800 text-sm"
            >
              NEXT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarSearchBox;
