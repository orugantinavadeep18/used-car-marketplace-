import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../../pages/Footer";

const AdminPanel = () => {
  const { currentUser, users } = useAuth();

  // Redirect if not logged in or not admin
  if (!currentUser || currentUser.email !== "admin@example.com") {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <div className="flex-1 px-6 py-10">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
              <p className="text-gray-500">Manage all registered users</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Logged in as:</p>
              <p className="font-semibold text-blue-600">{currentUser.email}</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Total Users: {users.length}
            </h2>
          </div>

          {users.length === 0 ? (
            <p className="text-gray-600 text-center">No users found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm text-left text-gray-700">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-3 border-b">Name</th>
                    <th className="p-3 border-b">Email</th>
                    <th className="p-3 border-b">Mobile</th>
                    <th className="p-3 border-b">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-3 border-b">{u.fullName || "—"}</td>
                      <td className="p-3 border-b">{u.email || "—"}</td>
                      <td className="p-3 border-b">{u.mobile || "—"}</td>
                      <td className="p-3 border-b">{u.address || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default AdminPanel;
