import React from 'react'
import Sidebar from './Siderbar';
import Header from './Header';
import Seat from './Seat';
import StudentList from './StudentList';
import EventsCalendar from './EventsCalendar';
import LatestNews from './LatestNews';


function AppDashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Header */}
        <Header />

        {/* Stats Cards */}
        <Seat />

        {/* Main Dashboard Content */}
        <div className="flex flex-wrap mt-6 space-x-4">
          {/* Student List */}
          <StudentList />

          {/* Events Calendar */}
          <EventsCalendar />

          {/* Latest News */}
          <LatestNews />
        </div>
      </div>
    </div>
  );
}

export default AppDashboard