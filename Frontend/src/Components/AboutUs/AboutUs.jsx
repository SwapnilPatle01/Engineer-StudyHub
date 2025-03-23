import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

function AboutUs() {
  const [teamMembers] = useState([
    {
      id: 1,
      name: "Rahul Bhandekar",
      designation: "Project Guide",
      image: "https://picsum.photos/200/300",
      description:
        "Rahul is a skilled project lead with experience in frontend and backend development.",
      linkedin: "https://www.linkedin.com/in/rahul-bhandekar/",
    },
    {
      id: 2,
      name: "Swapnil Patle",
      designation: "Project Lead",
      image: "https://picsum.photos/200/300",
      description:
        "Swapnil is passionate about building scalable web applications and mentoring new developers.",
      linkedin: "https://www.linkedin.com/in/swapnil-patle/",
    },
    {
      id: 3,
      name: "Ghamesh Rahangdale",
      designation: "Project Lead",
      image: "https://picsum.photos/200/300",
      description:
        "Ghamesh is a frontend developer with expertise in React, Tailwind, and modern web technologies.",
      linkedin: "https://www.linkedin.com/in/ghamesh-rahangdale-233753221/",
    },
    {
      id: 3,
      name: "Hari Yangantiwar",
      designation: "Team Member",
      image: "https://picsum.photos/200/300",
      description:
        "Ghamesh is a frontend developer with expertise in React, Tailwind, and modern web technologies.",
      linkedin: "https://www.linkedin.com/in/ghamesh-rahangdale/",
    },
  ]);
  return (
    <div className="w-full  bg-white">
      <div className="text-center m-auto max-w-[1400px] mb-12 p-6">
        <h2 className="text-4xl text-center font-bold text-[#0300A4]">
          Welcome to Engineer StudyHub
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Engineer Study Hub is a comprehensive platform designed to help
          engineering students access learning materials, notes, video lectures,
          previous year question papers (PYQs), and more in one place. It also
          provides development resources and serves as a job-seeking and posting
          platform for aspiring engineers and Bussiness owners.Engineer Study
          Hub aims to bridge the gap between academic learning and career
          opportunities, making education and job hunting easier for engineering
          students.
        </p>
        <h2 className="text-4xl text-center font-bold text-[#0300A4]">
          Our Vision
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          At Engineer StudyHub, we empower aspiring engineers by providing
          top-quality resources tailored to their academic journey. Our platform
          fosters an environment of learning and collaboration to help students
          develop critical skills and achieve career goals.
        </p>

        <h2 className="text-3xl text-center font-bold text-[#0300A4] mt-10">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="card bg-base-100 shadow-xl p-4">
              <figure>
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-32 h-32 object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.designation}</p>
                <p className="text-gray-600 text-sm mt-2">
                  {member.description}
                </p>
                <div className="mt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center justify-center"
                  >
                    <FaLinkedin className="mr-2" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
