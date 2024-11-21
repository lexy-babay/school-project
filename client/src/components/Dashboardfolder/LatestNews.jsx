import React from 'react';
import { FaNewspaper } from 'react-icons/fa';

function LatestNews() {
  const newsItems = [
    { title: "School Admission Open", date: "Dec 1, 2023 - 10:00 AM" },
    { title: "Parent-Teacher Meeting Scheduled", date: "Nov 15, 2023 - 9:00 AM" },
    { title: "Annual Sports Day", date: "Nov 20, 2023 - 1:00 PM" },
    // Additional news items can be added here
  ];

  return (
    <div className="w-full sm:flex-1 bg-white rounded-lg p-4 shadow mt-4 sm:mt-6">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Latest News</h2>
      <ul className="space-y-4">
        {newsItems.map((news, index) => (
          <li key={index} className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded transition-colors duration-200">
            <FaNewspaper className="text-blue-500 text-xl" />
            <div>
              <p className="font-medium">{news.title}</p>
              <p className="text-xs sm:text-sm text-gray-500">{news.date}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4 text-blue-600 hover:underline text-sm font-medium">View All</button>
    </div>
  );
}

export default LatestNews;
