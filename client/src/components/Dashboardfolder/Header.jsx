import React from "react";
import { FaBell, FaCog, FaUserCircle } from "react-icons/fa"; // Icons for user info, notifications, settings

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <img
          src="/path-to-your-logo.png" // Replace with the actual path to your logo
          alt="Logo"
          className="w-8 h-8" // Adjust size as needed
        />
        <h1 className="text-2xl font-semibold text-gray-700">Dashboard</h1>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 w-full border rounded-lg focus:outline-none"
        />
      </div>

      {/* User Info, Notifications, and Settings */}
      <div className="flex items-center space-x-4">
        {/* Notifications Icon */}
        <button className="relative text-gray-500 hover:text-gray-700">
          <FaBell className="w-6 h-6" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">3</span>
        </button>

        {/* User Icon */}
        <div className="flex items-center space-x-2">
          <FaUserCircle className="w-8 h-8 text-gray-600" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steven Zone</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>

        {/* Settings Icon */}
        <button className="text-gray-500 hover:text-gray-700">
          <FaCog className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Header;
