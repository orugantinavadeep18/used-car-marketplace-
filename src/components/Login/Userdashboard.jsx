import React from "react";
import { useAuth } from "./AuthContext";
import Navbar from "../Navbar";
import Footer from "../../pages/Footer";

const UserDashboard = () => {
  const { currentUser } = useAuth();

  const initials = currentUser?.fullName
    ? currentUser.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold">
              {initials}
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                {currentUser.fullName || "Welcome User"}
              </h2>
              <p className="text-gray-600">{currentUser.email}</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700">
            <div>
              <strong>Mobile:</strong> {currentUser.mobile || "N/A"}
            </div>
            <div>
              <strong>Address:</strong> {currentUser.address || "N/A"}
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
              Edit Profile
            </button>
            <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
              My Listings
            </button>
            <button className="ml-auto px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">
              Logout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default UserDashboard;
