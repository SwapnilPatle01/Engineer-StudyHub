import React, { useState } from "react";
import ResumeSubmission from "./Request/ResumeSubmission";
import Discussion from "./Community/Discussion";
import Roadmap from "./Roadmap/Roadmap";
import InterviewExperience from "./InterviewExperience/InterviewExperience";
import AllOpportunities from "./Pages/AllOpportunities";
import { Briefcase, BookOpen, Trophy, FileText, MessageCircle, Map, ClipboardList } from "lucide-react";

const JobDetails = () => {
  const [selectedJobType, setSelectedJobType] = useState("");

  const menuItems = [
    { label: "Find Jobs", icon: <Briefcase size={20} /> },
    { label: "Internships", icon: <BookOpen size={20} /> },
    { label: "Hackathon", icon: <Trophy size={20} /> },
    { label: "Resume Review", icon: <FileText size={20} /> },
    { label: "Discussions", icon: <MessageCircle size={20} /> },
    { label: "Roadmaps", icon: <Map size={20} /> },
    { label: "Interview Experience", icon: <ClipboardList size={20} /> },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-5 h-screen fixed left-0 top-15">
        <h2 className="text-xl font-bold mb-5 text-black text-left">Engineer Career Hub</h2>
        <div className="space-y-2">
          {menuItems.map(({ label, icon }) => (
            <div
              key={label}
              className={`flex text-left gap-3 p-3 cursor-pointer rounded-lg hover:bg-gray-200 transition ${
                selectedJobType === label ? "bg-gray-300" : ""
              }`}
              onClick={() => setSelectedJobType(label)}
              style={{justifyContent: "flex-start"}}
            >
              {icon} <span className="text-black font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 bg-gray-100 ml-64 min-h-screen">
        <div className="mb-4 text-sm breadcrumbs">
          <ul>
            <li>Home</li>
            <li>{selectedJobType || "Find Jobs"}</li>
          </ul>
        </div>

        <div className="text-center text-xl font-semibold text-gray-800">
          {selectedJobType === "Find Jobs" && <AllOpportunities />}
          {selectedJobType === "Resume Review" && <ResumeSubmission />}
          {selectedJobType === "Discussions" && <Discussion />}
          {selectedJobType === "Roadmaps" && <Roadmap />}
          {selectedJobType === "Interview Experience" && <InterviewExperience />}
          {selectedJobType === "Hackathon" && <div>Hackathon Section</div>}
          {selectedJobType === "Internships" && <h2>Internships</h2>}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;