import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import addResourceRoute from "./routes/resource.routes.js";
import userRoute from "./routes/userRoutes.js";

dotenv.config();

const app = express(); // Initialize express application

// CORS configuration
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3002"], // Allow specific origins
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions)); // Use CORS middleware

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(cookieParser()); // Parse cookies

const PORT = process.env.PORT || 5000;

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/resource", addResourceRoute);

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.use("/uploads", express.static("./uploads"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.status(500).json({ message: "Server error" });
});

// Test route
app.get("/", (req, res) => {
  res.send("Engineer Study Hub");
});

// Start the server
const server = app.listen(PORT, async () => {
  try {
    await connectDB(); // Connect to the database
    console.log(`Server running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process if the connection fails
  }
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("Shutting down gracefully...");
  server.close(() => {
    console.log("Closed out remaining connections.");
    process.exit(0);
  });
});
