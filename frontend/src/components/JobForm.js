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
            <input type="text" name="company" value={form.company} onChange={handleChange} placeholder='company name' required/>
            <input type="text" name="role" value={form.role} onChange={handleChange} placeholder='role' required/>
            <select name='status' value={form.status} onChange={handleChange} >
                 <option value="Applied">Applied</option>
                 <option value="Interview">Interview</option>
                 <option value="Offer">Offer</option>
                 <option value="Rejected">Rejected</option>
            </select>
            <input type="date" name="date" value={form.date} onChange={handleChange} required/>
            <input type="url" name="link" value={form.link} onChange={handleChange} placeholder='job link' required/>
            <button type="submit">Add Job</button>

        </form>
    </div>
    );

};
export default JobForm;

