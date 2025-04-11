import React,{useState} from 'react';
import axios from 'axios';
const JobForm = ({refreshJobs}) =>{
    const [form, setForm] = useState({
        company: "",
        role: "",
        status: "Applied",
        date: "",
        link: "",
      });
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]: e.target.value})
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
           await axios.post("http://localhost:3000/api/jobs",form)
            refreshJobs();
            setForm({ company: "", role: "", status: "Applied", date: "", link: "" });
        }
        catch(err){
            console.error("Error adding job:", err);
        }
    }
return(
    <div>
        <form onSubmit = {handleSubmit}>
            <label>Company Name:</label>
            <input type="text" name="company" value={form.company} onChange={handleChange} placeholder='Company Name' required/><br></br>
            <label>Role:</label>
            <input type="text" name="role" value={form.role} onChange={handleChange} placeholder='Role' required/><br></br>
            <label>status:</label>
            <select name='status' value={form.status} onChange={handleChange} >
                 <option value="Applied">Applied</option>
                 <option value="Interview">Interview</option>
                 <option value="Offer">Offer</option>
                 <option value="Rejected">Rejected</option>
            </select><br></br>
            <label>Date:</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} required/><br></br>
            <label>Link:</label>
            <input type="url" name="link" value={form.link} onChange={handleChange} placeholder='Job Link' required/><br></br>
            <button type="submit">Add Job</button>

        </form>
    </div>
    );

};
export default JobForm;

