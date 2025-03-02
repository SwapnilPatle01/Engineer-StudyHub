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
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// ✅ Fix `_dirname` issue in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ CORS Config (Secure & Scalable)
const allowedOrigins = process.env.CORS_ORIGINS?.split(",") || [
  "http://localhost:3000",
  "http://localhost:3002",
];
const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Connect to MongoDB before starting the server
const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB();
    console.log("✅ MongoDB connected successfully.");

    // ✅ Start the server only after DB connection
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });

    // ✅ Graceful shutdown (Handles CTRL+C)
    process.on("SIGINT", () => {
      console.log("🛑 Shutting down gracefully...");
      server.close(() => {
        console.log("🔌 Closed remaining connections.");
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
})();

// ✅ API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/resource", addResourceRoute);

// ✅ Serve Frontend Build (Fix `_dirname` issue)
app.use(express.static(path.join(__dirname, "..", "Frontend", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "Frontend", "build", "index.html"));
});


// ✅ Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// ✅ Serve Static Uploads
app.use("/uploads", express.static("./uploads"));

// ✅ Error Handling Middleware
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

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Engineer Study Hub");
});
