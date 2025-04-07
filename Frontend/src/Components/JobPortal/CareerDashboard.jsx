import React, { useState } from "react";
import ResumeSubmission from "./Request/ResumeSubmission";
import Discussion from "./Community/Discussion";
import Roadmap from "./Roadmap/Roadmap";
import InterviewExperience from "./InterviewExperience/InterviewExperience";
import FindJobs from "./Pages/FindJobs";
import { Briefcase,FileText, MessageCircle, Map, ClipboardList } from "lucide-react";

const JobDetails = () => {
  const [selectedJobType, setSelectedJobType] = useState("Find Jobs");

  return (
    <div className="flex min-h-screen">
      {/* Content Section */}
      <div className="flex-1 p-6 bg-gray-100  min-h-screen">
        <div className="text-center text-xl font-semibold text-gray-800">
          {selectedJobType === "Find Jobs" && <FindJobs />}
          {selectedJobType === "Resume Review" && <ResumeSubmission />}
          {selectedJobType === "Discussions" && <Discussion />}
          {selectedJobType === "Roadmaps" && <Roadmap />}
          {selectedJobType === "Interview Experience" && <InterviewExperience />}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;