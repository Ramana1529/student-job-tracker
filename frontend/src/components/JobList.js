import { useState, useEffect } from "react";
import axios from "axios";
import "./Styles.css";  
const JobList = ({ jobs, refreshJobs }) => {
  const [editingJob, setEditingJob] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleEditClick = (job) => {
    setEditingJob(job._id);
    setNewStatus(job.status);
  };

  const handleUpdateStatus = async () => {
    try {
      await axios.put(`http://localhost:3000/api/jobs/${editingJob}`, { status: newStatus });
      setEditingJob(null);
      refreshJobs();
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/jobs/${id}`);
      refreshJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const applyFilters = () => {
    let filtered = jobs;
    if (filterStatus) {
      filtered = filtered.filter((job) => job.status === filterStatus);
    }
    if (filterDate) {
      filtered = filtered.filter((job) => new Date(job.date).toLocaleDateString("en-CA") === filterDate);
    }
    setFilteredJobs(filtered);
  };

  return (
    <div className="job-list">
      <h3>Filter Jobs</h3>

      
      <div className="filter-container">
        <label>Status: </label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>

        <label>Date: </label>
        <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />

        <button onClick={applyFilters}>Apply Filter</button>
      </div>

      
      {filteredJobs.length > 0 ? (
        <table className="job-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Status</th>
              <th>Date</th>
              <th>Job Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job._id}>
                <td>{job.company}</td>
                <td>{job.role}</td>
                <td>
                  {editingJob === job._id ? (
                    <>
                      <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                      <button onClick={handleUpdateStatus}>Save</button>
                      <button onClick={() => setEditingJob(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      {job.status} <button onClick={() => handleEditClick(job)}>Edit</button>
                    </>
                  )}
                </td>
                <td>{new Date(job.date).toLocaleDateString()}</td>
                <td>
                  <a href={job.link} target="_blank" rel="noopener noreferrer">Job Link</a>
                </td>
                <td>
                <button onClick={() => handleDelete(job._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-jobs">No matching jobs found.</p>
      )}
    </div>
  );
};

export default JobList;
