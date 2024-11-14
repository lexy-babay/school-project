import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaDollarSign } from 'react-icons/fa';

function Seat() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6 p-4 sm:p-0">
      {/* Students Card */}
      <div className="flex-1 bg-blue-100 hover:bg-blue-200 transition-colors duration-300 rounded-lg p-6 shadow-lg transform hover:scale-105 hover:shadow-xl">
        <div className="flex items-center gap-4">
          <FaUserGraduate className="text-blue-800 text-3xl" />
          <h3 className="text-lg sm:text-xl font-bold text-blue-800">Students</h3>
        </div>
        <p className="text-3xl sm:text-4xl font-semibold text-blue-900 mt-2">1200</p>
      </div>

      {/* Teachers Card */}
      <div className="flex-1 bg-yellow-100 hover:bg-yellow-200 transition-colors duration-300 rounded-lg p-6 shadow-lg transform hover:scale-105 hover:shadow-xl">
        <div className="flex items-center gap-4">
          <FaChalkboardTeacher className="text-yellow-800 text-3xl" />
          <h3 className="text-lg sm:text-xl font-bold text-yellow-800">Teachers</h3>
        </div>
        <p className="text-3xl sm:text-4xl font-semibold text-yellow-900 mt-2">75</p>
      </div>

      {/* Total Income Card */}
      <div className="flex-1 bg-pink-100 hover:bg-pink-200 transition-colors duration-300 rounded-lg p-6 shadow-lg transform hover:scale-105 hover:shadow-xl">
        <div className="flex items-center gap-4">
          <FaDollarSign className="text-pink-800 text-3xl" />
          <h3 className="text-lg sm:text-xl font-bold text-pink-800">Total Income</h3>
        </div>
        <p className="text-3xl sm:text-4xl font-semibold text-pink-900 mt-2">$120,000</p>
      </div>
    </div>
  );
}

export default Seat;
