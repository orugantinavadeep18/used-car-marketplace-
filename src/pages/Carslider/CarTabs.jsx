import React, { useState } from "react";
import CarSlider from "./CarSlider";
import { recentlyAdded } from "./RecentlyAdded";
import { topRated } from "./TopRated";
import { Link } from "react-router-dom";

const CarTabs = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-10">
      {/* Tab Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-6">
          <button
            className={`text-lg font-semibold ${
              activeTab === "recent" ? "text-blue-600 border-b-2 border-blue-600" : "text-white"
            }`}
            onClick={() => handleTabClick("recent")}
          >
            Recently Added
          </button>
          <button
            className={`text-lg font-semibold ${
              activeTab === "top" ? "text-blue-600 border-b-2 border-blue-600" : "text-white"
            }`}
            onClick={() => handleTabClick("top")}
          >
            Top Rated
          </button>
        </div>
        <Link to="/all-cars">
          <button className="text-white bg-[#003B9F] px-4 py-2 rounded">
            View All
          </button>
        </Link>
      </div>

      {/* Slider Content */}
      {activeTab === "recent" ? (
        <CarSlider cars={recentlyAdded} />
      ) : (
        <CarSlider cars={topRated} />
      )}
    </div>
  );
};

export default CarTabs;
