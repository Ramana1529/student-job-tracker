const mongoose=require('mongoose');

const jobSchema= new mongoose.Schema({
    company:String,
    role: String,
    status: { type: String, enum: ['Applied', 'Interview', 'Offer', 'Rejected'], default: 'Applied' },
    date: Date,
    link: String
});
const job=mongoose.model('job',jobSchema);
module.exports=job;