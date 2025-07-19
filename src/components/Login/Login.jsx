// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import AuthCard from './AuthCard';
import Navbar from '../Navbar';
import login from "../../assets/login.jpeg"
import Footer from '../../pages/Footer';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <Navbar/>
    
    <div
    
      className="min-h-screen bg-cover bg-center bg-gradient-to-r from-black to-blue-950  flex items-center justify-center"
      // style={{ backgroundImage:` URL(${login})` }} // Replace with your image path
    >
       
      <AuthCard isLogin={isLogin} toggleForm={() => setIsLogin(!isLogin)} />
    </div>
    <div>
          <Footer/>
         </div>
    </div>
  );
};

export default LoginPage;
