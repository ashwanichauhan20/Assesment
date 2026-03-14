const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

// connect to database
connectDB();

const app = express();

// middleware
// CORS configuration (allow your frontend)
app.use(
  cors({
    origin: "https://assesment-o9my.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/auth", authRoutes);

// home route
app.get("/", (req, res) => {
  res.json({
    message: "API running successfully 🚀"
  });
});

// dashboard test route
app.get("/dashboard", (req, res) => {
  res.json({
    message: "Dashboard working"
  });
});

// port (Render provides PORT automatically)
const PORT = process.env.PORT || 5000;

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
