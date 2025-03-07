import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

function JobPost() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      type: "Full-time",
      salary: "₹8 LPA",
      description: "Develop and maintain frontend applications.",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "CodeBase Ltd",
      location: "New York",
      type: "Part-time",
      salary: "₹5 LPA",
      description: "Build and optimize backend APIs.",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "CodeBase Ltd",
      location: "New York",
      type: "Part-time",
      salary: "₹5 LPA",
      description: "Build and optimize backend APIs.",
    },
  ]);

  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newJob.title &&
      newJob.company &&
      newJob.location &&
      newJob.type &&
      newJob.salary &&
      newJob.description
    ) {
      setJobs([...jobs, { id: jobs.length + 1, ...newJob }]);
      setNewJob({
        title: "",
        company: "",
        location: "",
        type: "",
        salary: "",
        description: "",
      });
      setShowForm(false);
    }
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === "" || job.type === filterType)
  );

  return (
    <div className="p-6 bg-white rounded-lg h-full shadow-lg">
      {/* Header */}
      <div
        className="flex justify-between mb-4"
        style={{ justifyContent: "space-between" }}
      >
        <h1 className="text-lg font-bold">Job Posts</h1>
        <button
          className="btn btn-primary flex items-center rounded-lg"
          onClick={() => setShowForm(true)}
        >
          <PlusOutlined className="mr-2" /> Create Job Post
        </button>
      </div>

      {/* Search and Filter */}
      <div
        className="flex gap-4 mb-4"
        style={{ justifyContent: "space-between" }}
      >
        <input
          type="text"
          placeholder="Search job title..."
          className="input input-bordered w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="select select-bordered"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      {/* Job List */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="card bg-base-100 shadow-md p-4 border hover:border-primary"
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">
              {job.company} - {job.location}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Type:</strong> {job.type} | <strong>Salary:</strong>{" "}
              {job.salary}
            </p>
            <p className="text-gray-700 mt-2">{job.description}</p>
          </div>
        ))}
      </div>

      {/* Job Post Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">New Job Post</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                className="input input-bordered w-full"
                value={newJob.title}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="input input-bordered w-full"
                value={newJob.company}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Job Location"
                className="input input-bordered w-full"
                value={newJob.location}
                onChange={handleChange}
                required
              />
              <select
                name="type"
                className="select select-bordered w-full"
                value={newJob.type}
                onChange={handleChange}
                required
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
              </select>
              <input
                type="text"
                name="salary"
                placeholder="Salary (e.g. ₹8 LPA)"
                className="input input-bordered w-full"
                value={newJob.salary}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Job Description"
                className="textarea textarea-bordered w-full"
                value={newJob.description}
                onChange={handleChange}
                required
              ></textarea>
              <div
                className="flex justify-end space-x-2"
                style={{ justifyContent: "flex-end" }}
              >
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobPost;
