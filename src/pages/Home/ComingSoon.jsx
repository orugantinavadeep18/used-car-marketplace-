// src/components/pages/ComingSoon.jsx
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../Footer";

const ComingSoon = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-400">This feature is under development. Stay tuned!</p>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;
