const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const slideRoutes = require("./routes/slideRoutes");
const issueRoutes = require("./routes/issueRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ⭐ IMPORTANT FIX
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/smartcity");

app.use("/api/auth", authRoutes);
app.use("/api/slides", slideRoutes);
app.use("/api/issues", issueRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));