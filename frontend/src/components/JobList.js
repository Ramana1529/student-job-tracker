import { useState } from "react";
import axios from "axios";

const JobList = ({ jobs, refreshJobs }) => {
  const [editingJob, setEditingJob] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs); 

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

 
  const filterByStatus = () => {
    setFilteredJobs(jobs.filter((job) => (filterStatus ? job.status === filterStatus : true)));
  };

  
  const filterByDate = () => {
    setFilteredJobs(jobs.filter((job) => (filterDate ? new Date(job.date).toLocaleDateString("en-CA") === filterDate : true)));
  };

  return (
    <div className="job-list">
      <h3>u can do filtering here</h3>

      
      <div>
        <label>Status: </label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button onClick={filterByStatus}>Filter by Status</button>

        <label>Date: </label>
        <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />
        <button onClick={filterByDate}>Filter by Date</button>
      </div>

      
      {(filteredJobs.length > 0 ? filteredJobs : jobs).map((job) => (
        <div key={job._id} className="job-card">
          <h3>{job.company}</h3>
          <p>Role: {job.role}</p>
          <p>
            Status:{" "}
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
          </p>
          <p>Date: {new Date(job.date).toLocaleDateString()}</p>
          <a href={job.link} target="_blank" rel="noopener noreferrer">Job Link</a>
          <button onClick={() => handleDelete(job._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
