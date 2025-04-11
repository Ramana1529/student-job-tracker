import { useState, useEffect } from "react";
import axios from "axios";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

const Home = () => {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      console.log("reading url: ",API_BASE_URL)
      const res = await axios.get(`${API_BASE_URL}/api/jobs`);
      setJobs(res.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Student Job Tracker</h1>
      <JobForm refreshJobs={fetchJobs} />
      <JobList jobs={jobs} refreshJobs={fetchJobs} />
    </div>
  );
};

export default Home;
