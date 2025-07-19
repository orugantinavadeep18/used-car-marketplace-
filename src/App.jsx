import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import More from "./pages/Footer";
import Services from "./pages/Home/QuickSearch";
import Home from "./pages/Home/Home";
import HeroSlider from "./pages/Home/HeroSlider";
import QuickSearch from "./pages/Home/QuickSearch";
import CarSlider from "./pages/Carslider/CarSlider";
import AllCars from "./pages/Carslider/AllCars";
import HomeContent from "./pages/Home/HomeContent";
import LoginPage from "./components/Login/Login";
import AboutUs from "./pages/About";
import Footer from "./pages/Footer";
import BrowseCars from "./pages/Carslider/BrowseCars";
import { CartProvider } from "./pages/Home/CartContext";
import Cart from "./pages/Cart";
import SellCarDetails from "./pages/Home/SellCarDetails";
import Payment from "./pages/Payment";
import ComingSoon from "./pages/Home/ComingSoon";
import { AuthProvider } from "./components/Login/AuthContext";
import ProtectedRoute from "./components/Login/ProtectedRoute";
import UserDashboard from "./components/Login/Userdashboard";
import AdminPanel from "./components/Login/AdminPanel";

const App=()=>{
  return(
  <CartProvider>
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route path="/quicksearch" element={<ProtectedRoute><QuickSearch /></ProtectedRoute>} />
        <Route path="/sell" element={<ProtectedRoute><Sell /></ProtectedRoute>} />
        <Route path="/sell-car-details" element={<ProtectedRoute><SellCarDetails /></ProtectedRoute>} />
        <Route path="/browse-cars" element={<ProtectedRoute><BrowseCars /></ProtectedRoute>} />
        <Route path="/all-cars" element={<ProtectedRoute><AllCars /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} /> 
      </Routes>
    </AuthProvider>
  </BrowserRouter>
 </CartProvider>
  );
}

export default App;