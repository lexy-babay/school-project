import React from 'react'

function Seat() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="text-center font-bold text-2xl mb-4"></h2>
      <form className="space-y-4">
        <input type="text" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="text" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="text" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded" />
        <input type="text" placeholder="Seat Number" className="w-full p-2 border border-gray-300 rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white rounded py-2">Submit</button>
      </form>
    </div>
  );
}



export default Seat