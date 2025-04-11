import { useState, useEffect } from "react";
import axios from "axios";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/jobs");
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
