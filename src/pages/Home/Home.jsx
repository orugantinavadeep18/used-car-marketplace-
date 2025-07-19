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


const Home=()=>{
    return(
       
        <>
         <Contact/>
        <Navbar/>
         <HeroSlider />
         <div className="absolute right-60 top-120 inset-0 flex items-center justify-center">
           <CarSearchBox />
         </div>
        
          
        <div
         className="bg-no-repeat bg-cover w-full min-h-screen px-4 py-8"
          style={{ backgroundImage: `url(${img})` }}
          >
         <QuickSearch embedded />
         <h1 className="text-white text-7xl font-serif absolute top-300">Select Your Dream Car </h1>
           <p className="text-white text-4xl right-220 absolute top-320">Everything in life is somewhere else,</p> 
            <p className="text-white text-4xl font-sans absolute right-260 top-330">and you get there in a car</p>
         <CarTabs embedded />
       </div>
       {/* <div>
        <TestimonialsSlider/>
       </div> */}
         <div>
          <Footer/>
         </div>
         

         
        {/* <div className="w-full min-h-[850px] pt-[70px] overflow-hidden bg-[#f0f2f3] flex items-center justify-center ">
        
        </div> */}
        {/* <div className="min-h-screen size-11  bg-gray-100 flex justify-center items-center">
        
        </div> */}
         
        </>
    )
}
export default Home