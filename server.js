const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/course");
const enrollmentRoutes = require("./routes/enrollment");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(cors());
app.use(express.json());

/* Routes */

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enroll", enrollmentRoutes);
app.use("/api/admin", adminRoutes);

/* MongoDB Connection */

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected Successfully"))
.catch((err)=> console.log("MongoDB Connection Error:",err));

/* Server */

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`);
});