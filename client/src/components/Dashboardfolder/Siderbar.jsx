import React from 'react';

function Sidebar() {
  return (
    <div className="w-1/4 bg-yellow-300 p-4 flex flex-col space-y-4 p-10">
      <button className="bg-gray-700 text-white rounded-full py-2 px-4">Student</button>
      <button className="bg-gray-700 text-white rounded-full py-2 px-4">Teacher</button>
      <button className="bg-gray-700 text-white rounded-full py-2 px-4">Parents</button>
    </div>
  );
}

export default Sidebar;
