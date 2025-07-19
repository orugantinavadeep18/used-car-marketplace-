import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaUser, FaUserPlus } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="hidden md:flex bg-gray-900 text-white py-2 px-4 shadow-lg justify-between items-center w-full max-w-9xl mx-auto mt-0">
      {/* Contact Information */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <MdEmail className="text-red-500" size={20} />
          <span className="text-sm">info@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <MdPhone className="text-red-500" size={20} />
          <span className="text-sm">+91 9999999999</span>
        </div>
        <div className="flex items-center space-x-2">
          <MdLocationOn className="text-red-500" size={20} />
          <span className="text-sm">Some Address, 123-456 (IND)</span>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center space-x-2">
        <span className="text-sm">Follow Us:</span>
        <a href="#" className="text-white hover:text-blue-400">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-white hover:text-blue-300">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="text-white hover:text-pink-500">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-white hover:text-blue-600">
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
