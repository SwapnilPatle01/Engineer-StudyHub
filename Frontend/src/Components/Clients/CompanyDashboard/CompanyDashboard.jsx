import React, { useState } from "react";
import {
  DashboardOutlined,
  FileTextOutlined,
  CalendarOutlined,
  SolutionOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import DashboardHome from "../Tabs/DashboardHome";
import JobPost from "../Tabs/JobPost";

function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 w-64 h-screen bg-white shadow-lg p-4">
        <h2 className="text-lg font-bold ml-4 text-left text-gray-800">Company Dashboard</h2>
        <ul className="space-y-2 mt-4">
          <li
            className={`p-3 cursor-pointer rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-all ${
              activeTab === "Dashboard" ? "bg-gray-300 font-bold" : ""
            }`}
            onClick={() => setActiveTab("Dashboard")}
          >
            <DashboardOutlined className="mr-2 text-lg" />Dashboard
          </li>
          <li
            className={`p-3 cursor-pointer rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-all ${
              activeTab === "Job Post" ? "bg-gray-300 font-bold" : ""
            }`}
            onClick={() => setActiveTab("Job Post")}
          >
            <FileTextOutlined className="mr-2 text-lg" />Job Post
          </li>
          <li
            className={`p-3 cursor-pointer rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-all ${
              activeTab === "Interviews" ? "bg-gray-300 font-bold" : ""
            }`}
            onClick={() => setActiveTab("Interviews")}
          >
            <CalendarOutlined className="mr-2 text-lg" />Interviews
          </li>
          <li
            className={`p-3 cursor-pointer rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-all ${
              activeTab === "Events" ? "bg-gray-300 font-bold" : ""
            }`}
            onClick={() => setActiveTab("Events")}
          >
            <SolutionOutlined className="mr-2 text-lg" />Events
          </li>
          <li
            className={`p-3 cursor-pointer rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-all ${
              activeTab === "Company Profile" ? "bg-gray-300 font-bold" : ""
            }`}
            onClick={() => setActiveTab("Company Profile")}
          >
            <ProfileOutlined className="mr-2 text-lg" />Company Profile
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 bg-gray-200 min-h-screen h-auto shadow-inner">
        {activeTab === "Dashboard" && <DashboardHome />}
        {activeTab === "Job Post" && <JobPost />}
        {activeTab === "Interviews" && <div className="text-xl font-semibold">Interviews Content</div>}
        {activeTab === "Events" && <div className="text-xl font-semibold">Events Content</div>}
        {activeTab === "Company Profile" && <div className="text-xl font-semibold">Company Profile Content</div>}
        {activeTab === "Create Job Post" && <div className="text-xl font-semibold">Company Profile Content</div>}

      </div>
    </div>
  );
}

export default CompanyDashboard;
