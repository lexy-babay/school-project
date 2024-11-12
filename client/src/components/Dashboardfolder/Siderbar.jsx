import React, { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed sm:static w-64 sm:w-1/5 bg-white h-screen p-4 shadow-lg transition-transform duration-300 ${isOpen ? 'transform-none' : '-translate-x-full sm:translate-x-0'}`}>
      <button 
        className="sm:hidden text-gray-800 p-2 mb-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Open'} Menu
      </button>
      <h2 className="text-2xl font-bold mb-6">STUDYLMS</h2>
      <ul className="space-y-4">
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Dashboard</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Management</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Students</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Classes</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Exams</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Events</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Library</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
