import React, { useState } from "react";
import QuickSearch from "./QuickSearch";
import CarSlider from "../Carslider/CarSlider";
import { recentlyAdded } from "../Carslider/RecentlyAdded";
import { topRated } from "../Carslider/TopRated";
import { Link } from "react-router-dom";

const HomeContent = () => {
  const [activeTab, setActiveTab] = useState("recent");

  return (
    <div className="relative">
      {/* Background Search Section */}
      <QuickSearch />

      {/* Car Tab Section floating over */}
      <div className="absolute top-[400px] w-full z-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tabs + View All */}
          <div className="flex justify-between items-center text-white mb-2">
            <div className="flex gap-6 font-bold text-xl">
              <button
                className={`pb-1 ${activeTab === "recent" ? "border-b-2 border-white" : "text-gray-300"}`}
                onClick={() => setActiveTab("recent")}
              >
                Recently Added
              </button>
              <button
                className={`pb-1 ${activeTab === "top" ? "border-b-2 border-white" : "text-gray-300"}`}
                onClick={() => setActiveTab("top")}
              >
                Top Rated
              </button>
            </div>
            <Link to="/all-cars">
              <button className="bg-white text-black px-4 py-2 rounded font-semibold">View All</button>
            </Link>
          </div>

          {/* Car Slider */}
          <CarSlider cars={activeTab === "recent" ? recentlyAdded : topRated} />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
