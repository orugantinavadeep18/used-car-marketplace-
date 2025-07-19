import React from "react";
import free from "../assets/free.png"
import { FaSearch } from "react-icons/fa";
import {  useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdOutlineImageSearch } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { SiSellfy } from "react-icons/si";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosNotifications, IoMdLogIn } from "react-icons/io";
import QuickSearch from "../pages/Home/QuickSearch";
import Home from "../pages/Home/Home";
import BrowseCars from "../pages/Carslider/BrowseCars";
import { useCart } from "../pages/Home/CartContext";
import { useAuth } from "./Login/AuthContext";


const Navbar = () => {
  const { cartItems } = useCart();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!currentUser) return navigate("/login");
    if (searchTerm.trim()) {
      navigate(`/browse-cars?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  const handleProtectedRoute = (route) => {
    if (!currentUser) navigate("/login");
    else navigate(route);
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full flex flex-wrap items-center justify-between bg-gradient-to-r from-black via-gray-600 to-gray-800 px-4 sm:px-6 lg:px-8 py-3 z-10">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="https://cdn-icons-png.flaticon.com/512/9469/9469627.png" alt="logo" className="h-10 sm:h-14" />
        <h1 className="text-2xl sm:text-3xl text-white font-bold">Vehicle Verse</h1>
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="w-full md:w-1/2 lg:w-1/3 mx-auto relative my-3 md:my-0"
      >
        <input
          type="search"
          placeholder="Search make, model, year..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pr-8 text-white bg-transparent rounded-full border-2 border-white focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400"
        >
          <FaSearch />
        </button>
      </form>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 text-white">
        <Link to="/" className="flex items-center gap-1 hover:text-blue-400">
          <FaHome /> Home
        </Link>
        <button
          onClick={() => handleProtectedRoute("/cart")}
          className="relative flex items-center gap-1 hover:text-blue-400"
        >
          <FaShoppingCart /> Cart
          {cartItems?.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 rounded-full px-2 text-xs">
              {cartItems.length}
            </span>
          )}
        </button>
        <button
          onClick={() => handleProtectedRoute("/sell-car-details")}
          className="flex items-center hover:text-blue-400"
        >
          <SiSellfy /> Sell
        </button>
        <Link to="/about" className="flex items-center gap-1 hover:text-blue-400">
          <MdReviews /> About Us
        </Link>
        <Link to="/coming-soon" className="flex items-center hover:text-blue-400">
          <IoIosNotifications />
        </Link>
        {!currentUser ? (
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-white font-semibold border-2 border-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
          >
            <IoMdLogIn size={18} /> Login
          </button>
        ) : (
          <>
            <Link to="/dashboard" className="font-semibold hover:text-blue-400">
              Dashboard
            </Link>
            {currentUser.email === "admin@example.com" && (
              <Link to="/admin" className="font-semibold text-red-500 hover:text-red-400">
                Admin
              </Link>
            )}
            <button
              onClick={logout}
              className="font-semibold border-2 border-white px-3 py-1 rounded hover:text-red-400"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      
  {isMenuOpen && (
  <div className="w-full md:hidden bg-gradient-to-r from-black via-gray-600 to-gray-800 px-6 py-4 text-white flex flex-col gap-4 animate-slide-down shadow-md rounded-b-lg">
    <Link
      to="/"
      onClick={() => setIsMenuOpen(false)}
      className="hover:border-l-4 hover:border-blue-400 hover:pl-3 hover:shadow-md hover:shadow-blue-400 transition-all duration-300"
    >
      Home
    </Link>
    <button
      onClick={() => handleProtectedRoute("/cart")}
      className="text-left hover:border-l-4 hover:border-blue-400 hover:pl-3 hover:shadow-md hover:shadow-blue-400 transition-all duration-300"
    >
      Cart
    </button>
    <button
      onClick={() => handleProtectedRoute("/sell-car-details")}
      className="text-left hover:border-l-4 hover:border-blue-400 hover:pl-3 hover:shadow-md hover:shadow-blue-400 transition-all duration-300"
    >
      Sell
    </button>
    <Link
      to="/about"
      onClick={() => setIsMenuOpen(false)}
      className="hover:border-l-4 hover:border-blue-400 hover:pl-3 hover:shadow-md hover:shadow-blue-400 transition-all duration-300"
    >
      About Us
    </Link>
    <Link
      to="/coming-soon"
      onClick={() => setIsMenuOpen(false)}
      className="hover:border-l-4 hover:border-blue-400 hover:pl-3 hover:shadow-md hover:shadow-blue-400 transition-all duration-300"
    >
      Notifications
    </Link>

    {!currentUser ? (
      <button
        onClick={() => {
          navigate("/login");
          setIsMenuOpen(false);
        }}
        className="text-left hover:border-l-4 hover:border-blue-400 hover:pl-3 hover:shadow-md hover:shadow-blue-400 transition-all duration-300"
      >
        Login
      </button>
    ) : (
      <>
        <Link
          to="/dashboard"
          onClick={() => setIsMenuOpen(false)}
          className="hover:border-l-4 hover:border-blue-400 hover:pl-3 hover:shadow-md hover:shadow-blue-400 transition-all duration-300"
        >
          Dashboard
        </Link>
        {currentUser.email === "admin@example.com" && (
          <Link
            to="/admin"
            onClick={() => setIsMenuOpen(false)}
            className="text-red-400 hover:text-red-300 hover:border-l-4 hover:border-red-400 hover:pl-3 hover:shadow-md hover:shadow-red-400 transition-all duration-300"
          >
            Admin Panel
          </Link>
        )}
        <button
          onClick={() => {
            logout();
            setIsMenuOpen(false);
          }}
          className="text-left hover:text-red-400 hover:border-l-4 hover:border-red-400 hover:pl-3 hover:shadow-md hover:shadow-red-400 transition-all duration-300"
        >
          Logout
        </button>
      </>
    )}
  </div>
)}

    </nav>
  );
};


export default Navbar;
