import React, { useState } from 'react';
import { FaTachometerAlt, FaUserGraduate, FaChalkboardTeacher, FaClipboardList, FaBook, FaCog, FaCalendarAlt, FaCogs } from 'react-icons/fa';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: "Dashboard", icon: <FaTachometerAlt /> },
    { label: "Management", icon: <FaCogs /> },
    { label: "Students", icon: <FaUserGraduate /> },
    { label: "Classes", icon: <FaChalkboardTeacher /> },
    { label: "Exams", icon: <FaClipboardList /> },
    { label: "Events", icon: <FaCalendarAlt /> },
    { label: "Library", icon: <FaBook /> },
    { label: "Settings", icon: <FaCog /> }
  ];

  return (
    <div className={`fixed sm:static w-64 sm:w-1/5 bg-white h-screen p-4 shadow-lg transition-transform duration-300 ${isOpen ? 'transform-none' : '-translate-x-full sm:translate-x-0'}`}>
      {/* Toggle Button for Mobile */}
      <button 
        className="sm:hidden text-gray-800 p-2 mb-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Open'} Menu
      </button>

      {/* Logo/Title */}
      <h2 className="text-2xl font-bold mb-6">Olams</h2>
      {/* Menu Items */}
      <h2 className="text-2xl font-bold mb-6 uppercase">Olams</h2>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded cursor-pointer text-gray-700"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
