import React from "react";
import TestimonialsSlider from "./TestmonialsSlider"; // include the slider you made
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import { IoCarSport } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaPeopleGroup ,FaAws } from "react-icons/fa6";



const AboutUs = () => {
  return (
    <div>
        <Navbar/> 
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-8 py-12 bg-white">
        
        <div className="w-full md:w-1/2 mb-8 md:mb-0 bg-radial ">
          <img src="https://purepng.com/public/uploads/large/61502738450rmdyyubo5bupscm2oegdvnn6xb7yysuzcvpydir88l3gohfrpwxfagozxsdigyculn6z7gdtbrn48quwogndauzjsizmpaxijbab.png" alt="Vehicle Marketplace" className="w-full " />
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-xl text-blue-700 font-bold uppercase mb-2">About Our Platform</h2>
          <h1 className="text-4xl font-bold">
            A Trusted <span className="text-blue-700">Vehicle E-Commerce</span> Platform
          </h1>
          <p className="mt-4 leading-relaxed text-justify">
            Our platform is designed to redefine the way people buy and sell second-hand vehicles online. 
            Whether you're a buyer searching for the perfect car or a seller wanting to reach a wide audience, 
            we provide a secure, scalable, and user-friendly solution powered by AWS infrastructure.
          </p>

          <ul className="mt-6 list-disc list-inside space-y-2 text-gray-700">
            <li>List, browse, and purchase vehicles securely and efficiently.</li>
            <li>Advanced filters for make, model, year, price, and location.</li>
            <li>End-to-end transaction system with escrow and payment gateway integration.</li>
            <li>Profile-based system for buyers, sellers, and platform admins.</li>
            <li>Hosted on AWS for maximum uptime, performance, and scalability.</li>
          </ul>

          <a href="/browse" className="mt-6 inline-block bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition duration-300">
            Start Exploring →
          </a>
        </div>
      </section>

      {/* Features Stats */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <IoCarSport className="absolute right-300 top-192 text-3xl"/>
            {/* <img src="/assets/icon-truck.png" alt="Available Listings" className="mx-auto mb-3" /> */}
            <h3 className="text-3xl font-bold">2000+</h3>
            <p>Vehicle Listings</p>
          </div>
          <div>
            <IoPeople className="absolute right-225 top-192 text-3xl"/>
            {/* <img src="/assets/icon-star.png" alt="Satisfied Customers" className="mx-auto mb-3" /> */}
            <h3 className="text-3xl font-bold">5000+</h3>
            <p>Satisfied Customers</p>
          </div>
          <div>
            <FaPeopleGroup className="absolute right-150 top-192 text-3xl"/>
            {/* <img src="/assets/icon-team.png" alt="Verified Sellers" className="mx-auto mb-3" /> */}
            <h3 className="text-3xl font-bold">1000+</h3>
            <p>Verified Sellers</p>
          </div>
          <div>
            <FaAws className="absolute right-75 top-192 text-4xl"/>
            {/* <img src="/assets/icon-expert.png" alt="Platform Uptime" className="mx-auto mb-3" /> */}
            <h3 className="text-3xl font-bold">99.9%</h3>
            <p>Uptime with AWS</p>
          </div>
        </div>
      </section>

      {/* Floating Card Testimonial Slider */}
      <TestimonialsSlider />

      {/* Footer/Contact */}
      <Footer/>
    </div>
   </div> 
  );
};

export default AboutUs;
