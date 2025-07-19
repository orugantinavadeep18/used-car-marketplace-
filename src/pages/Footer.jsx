import React from "react";
import free from "../assets/free.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-600 to-gray-800 text-white py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://freepngimg.com/thumb/toyota/2-white-toyota-png-image-car-image.png"
              alt="Logo"
              className="h-8 w-12"
            />
            <h3 className="text-xl font-semibold">Vehicle Verse</h3>
          </div>
          <p>Your trusted second-hand vehicle marketplace backed by AWS.</p>
          <p className="mt-3">📞 +91 98765 43210</p>
          <p>📍 Hyderabad, India</p>
          <p>📧 support@secondcarzone.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold border-b-2 border-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>› About Us</li>
            <li>› Sell Your Car</li>
            <li>› FAQ</li>
            <li>› Browse Listings</li>
            <li>› Privacy Policy</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold border-b-2 border-white mb-3">Support</h4>
          <ul className="space-y-2">
            <li>› Help Center</li>
            <li>› Partner Program</li>
            <li>› Escrow Policy</li>
            <li>› Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold border-b-2 border-white mb-3">Newsletter</h4>
          <p>Get the latest car listings and updates.</p>
          <input
            type="email"
            placeholder="Your Email"
            className="mt-3 p-2 w-full text-black rounded"
          />
          <button className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer