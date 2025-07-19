import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-r from-black via-gray-700 to-gray-900">

      {/* Contact Bar (Desktop Only) */}
      <div className="hidden md:flex justify-between items-center px-6 py-3 border-b border-gray-700">
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

        <div className="flex items-center space-x-3">
          <span className="text-sm">Follow Us:</span>
          <a href="#" className="text-white hover:text-blue-500">
            <FaFacebook size={18} />
          </a>
          <a href="#" className="text-white hover:text-sky-400">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="text-white hover:text-pink-500">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="text-white hover:text-blue-600">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 py-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9469/9469627.png"
              alt="Logo"
              className="h-6 w-6"
            />
            <h3 className="text-xl font-bold">Vehicle Verse</h3>
          </div>
          <p className="text-sm text-gray-300">
            Your trusted second-hand vehicle marketplace backed by AWS.
          </p>
          <div className="text-sm mt-2 space-y-1">
            <p>📞 +91 98765 43210</p>
            <p>📍 Hyderabad, India</p>
            <p>📧 support@secondcarzone.com</p>
          </div>

          {/* Contact Info (Mobile Only) */}
          <div className="md:hidden mt-4 space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <MdEmail className="text-red-500" size={18} />
              <span>info@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone className="text-red-500" size={18} />
              <span>+91 9999999999</span>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-red-500" size={18} />
              <span>Some Address, 123-456 (IND)</span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <span>Follow:</span>
              <a href="#" className="hover:text-blue-500"><FaFacebook size={16} /></a>
              <a href="#" className="hover:text-sky-400"><FaTwitter size={16} /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram size={16} /></a>
              <a href="#" className="hover:text-blue-600"><FaLinkedinIn size={16} /></a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 border-b pb-1 w-fit">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>› About Us</li>
            <li>› Sell Your Car</li>
            <li>› FAQ</li>
            <li>› Browse Listings</li>
            <li>› Privacy Policy</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-3 border-b pb-1 w-fit">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>› Help Center</li>
            <li>› Partner Program</li>
            <li>› Escrow Policy</li>
            <li>› Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-3 border-b pb-1 w-fit">Newsletter</h4>
          <p className="text-sm text-gray-300 mb-3">
            Get the latest car listings and updates.
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded text-black text-sm"
          />
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 text-xs border-t border-gray-600 pt-4 pb-2">
        &copy; {new Date().getFullYear()} Vehicle Verse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
