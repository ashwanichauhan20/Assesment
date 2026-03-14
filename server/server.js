const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// CORS configuration (allow your frontend)
app.use(
  cors({
    origin: "https://assesment-o9my.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "API is running successfully 🚀"
  });
});

// Dashboard test route
app.get("/dashboard", (req, res) => {
  res.json({
    message: "Dashboard API working"
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

// Server port (Render uses process.env.PORT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
