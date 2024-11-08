import React from 'react'
import Sidebar from './Siderbar';
import Header from './Header';
import Seat from './Seat';

function AppDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gradient-to-r from-blue-400 to-purple-500">
        <Header />
        <div className="flex justify-center items-center h-full">
          <Seat />
        </div>
      </div>
    </div>
  );
}

export default AppDashboard