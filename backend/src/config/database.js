const mongoose=require('mongoose');
require('dotenv').config({ path: '.env' });
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("mongoDB connected")
    }
    catch(err){
         console.log("mongoDB not connected: ",err);
    }
}
module.exports=connectDB;