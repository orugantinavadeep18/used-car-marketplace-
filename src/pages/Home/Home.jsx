import React from "react";
import Navbar from "../../components/Navbar";
import CarSearchBox from "./CarSearchBox";
import HeroSlider from "./HeroSlider";
import QuickSearch from "./QuickSearch";
import CarSlider from "../Carslider/CarSlider";
import {recentlyAdded} from "../Carslider/RecentlyAdded"
import {topRated} from "../Carslider/TopRated"
import CarTabs from "../Carslider/CarTabs";
import AllCars from "../Carslider/AllCars";
import img from "../../assets/img.jpg"
import Footer from "../Footer";
import TestimonialsSlider from "../TestmonialsSlider";
import Contact from "../Contact";


const Home = () => {
  return (
    <>
      <Contact />
{/* <<<<<<< HEAD */}
    
=======
{/* >>>>>>> 6c10a98 (Updated Home.jsx for better UI/responsiveness) */}
      <Navbar />
      <HeroSlider />

      {/* Responsive search-box overlay */}
      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-32 -mt-20">
        <CarSearchBox />
      </div>

      {/* Hero background section */}
      <div
        className="w-full min-h-screen bg-no-repeat bg-cover py-16 px-4 sm:px-8 md:px-16 lg:px-32 relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="max-w-4xl mx-auto text-center text-white space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
            Select Your Dream Car
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            Everything in life is somewhere else,
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-sans">
            and you get there in a car
          </p>
        </div>

        <div className="mt-12 px-4 sm:px-0">
          <QuickSearch embedded />
          <CarTabs embedded />
        </div>
      </div>

       {/* <<<<<<< HEAD */}
      
{/* ======= */}
     
      {/* >>>>>>> 6c10a98 (Updated Home.jsx for better UI/responsiveness) */}
      <Footer />
    </>
  );
};
export default Home
