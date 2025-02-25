import React from "react";
import MyBarChart from "../../BarChart/Index";
import DashboardCard from "../../../Common/Card";

const DashboardHome = () => {
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="p-6">
      {/* Greeting Section */}
      <div className="mb-6">
        <h1 className="text-2xl text-violet-700 font-bold">{getGreeting()}, John</h1>
        <p className="text-gray-500 text-lg">
          Welcome back! Here’s an overview of your company’s job listings and
          activities.
        </p>
      </div>

      {/* Dashboard Overview */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Dashboard Overview</h2>
      </div>

      {/* Dashboard Cards */}
      <div className="flex flex-wrap justify-start gap-4">
        <DashboardCard
          number="235"
          title="New Candidates to review"
          color="#553CDF"
        />
        <DashboardCard
          number="28"
          title="Scheduled For Next Rounds"
          color="#56cdad"
        />
        <DashboardCard number="27" title="Messages Received" color="#27a4ff" />
      </div>

      {/* Charts & Job Openings Section */}
      <div className="flex flex-wrap justify-center md:justify-around mt-6 gap-6">
        {/* Bar Chart */}
        <div className="w-[600px]">
          <MyBarChart />
        </div>

        {/* Job Openings Card */}
        <div className="border border-gray-300 bg-white shadow-md rounded-lg w-[320px] h-[140px] p-4 flex flex-col justify-between">
          <h1 className="font-extrabold text-xl">Job Open</h1>
          <div className="flex items-center space-x-3">
            <span className="text-5xl font-bold cursor-pointer">12</span>
            <span className="text-2xl text-gray-400 font-semibold">
              Jobs Opened
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
