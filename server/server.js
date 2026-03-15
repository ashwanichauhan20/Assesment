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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173", // Vite local frontend
  "https://assesment-o9my.onrender.com" // deployed frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

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

// health check route (good for Render uptime check)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// port (Render automatically provides PORT)
const PORT = process.env.PORT || 5000;

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
