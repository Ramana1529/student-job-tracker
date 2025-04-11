const express = require("express");
const cors = require("cors");
const connectDB= require("./config/database")
const jobroutes=require("./routes/routes")
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", jobroutes);


const PORT = process.env.PORT || 3000;
connectDB().then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch(err => console.error("Failed to start server:", err));