import React from "react";

function DashboardHome() {
  return (
    <div className="p-6 bg-white rounded-lg h-screen ">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="card bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Job Posts
          </h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
        </div>
        <div className="card bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Interviews
          </h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
        </div>
        <div className="card bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">
            Upcoming Events
          </h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
        </div>
      </div>    
    </div>
  );
}

export default DashboardHome;
