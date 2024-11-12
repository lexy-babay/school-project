import React from 'react';

function Seat() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6 p-4 sm:p-0">
      <div className="flex-1 bg-blue-100 hover:bg-blue-200 transition-colors duration-300 rounded-lg p-6 shadow-lg">
        <h3 className="text-lg sm:text-xl font-bold text-blue-800">Students</h3>
        <p className="text-3xl sm:text-4xl font-semibold text-blue-900">1200</p>
      </div>
      <div className="flex-1 bg-yellow-100 hover:bg-yellow-200 transition-colors duration-300 rounded-lg p-6 shadow-lg">
        <h3 className="text-lg sm:text-xl font-bold text-yellow-800">Teachers</h3>
        <p className="text-3xl sm:text-4xl font-semibold text-yellow-900">75</p>
      </div>
      <div className="flex-1 bg-pink-100 hover:bg-pink-200 transition-colors duration-300 rounded-lg p-6 shadow-lg">
        <h3 className="text-lg sm:text-xl font-bold text-pink-800">Total Income</h3>
        <p className="text-3xl sm:text-4xl font-semibold text-pink-900">$120,000</p>
      </div>
    </div>
  );
}

export default Seat;
