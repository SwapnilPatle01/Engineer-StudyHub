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

app.use(cors());
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
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Add a test route to check file serving
app.get("/test-file-serving", (req, res) => {
  const uploadPaths = {
    pdfPath: "/uploads/pdfs",
    imagePath: "/uploads/images",
    baseUrl: `http://localhost:${PORT}`
  };
  
  res.send(`
    <html>
      <head>
        <title>File Serving Test</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { color: #553CDF; }
          .section { margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
          pre { background-color: #f5f5f5; padding: 10px; border-radius: 5px; overflow-x: auto; }
        </style>
      </head>
      <body>
        <h1>File Serving Test</h1>
        <div class="section">
          <h2>Upload Paths</h2>
          <pre>${JSON.stringify(uploadPaths, null, 2)}</pre>
        </div>
        <div class="section">
          <h2>Test PDF Access</h2>
          <p>PDFs should be accessible at: <code>${uploadPaths.baseUrl}${uploadPaths.pdfPath}/[filename]</code></p>
        </div>
        <div class="section">
          <h2>Test Image Access</h2>
          <p>Images should be accessible at: <code>${uploadPaths.baseUrl}${uploadPaths.imagePath}/[filename]</code></p>
        </div>
      </body>
    </html>
  `);
});

// Create a test HTML page for file uploads
app.get("/test-upload", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Test File Upload</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { color: #553CDF; }
          .form-group { margin-bottom: 15px; }
          label { display: block; margin-bottom: 5px; font-weight: bold; }
          input, select { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
          button { background-color: #553CDF; color: white; border: none; padding: 10px 15px; border-radius: 4px; cursor: pointer; }
          button:hover { background-color: #4430b0; }
        </style>
      </head>
      <body>
        <h1>Test File Upload</h1>
        <form action="/api/v1/resource" method="post" enctype="multipart/form-data">
          <div class="form-group">
            <label for="university">University</label>
            <input type="text" id="university" name="university" required>
          </div>
          <div class="form-group">
            <label for="branch">Branch</label>
            <input type="text" id="branch" name="branch" required>
          </div>
          <div class="form-group">
            <label for="semester">Semester</label>
            <input type="text" id="semester" name="semester" required>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" required>
          </div>
          
          <h2>PYQ</h2>
          <div class="form-group">
            <label for="pyqTitle">PYQ Title</label>
            <input type="text" id="pyqTitle" name="pyqTitle">
          </div>
          <div class="form-group">
            <label for="pyqFile">PYQ File (PDF)</label>
            <input type="file" id="pyqFile" name="pyqFile" accept=".pdf">
          </div>
          
          <h2>Note</h2>
          <div class="form-group">
            <label for="noteTitle">Note Title</label>
            <input type="text" id="noteTitle" name="noteTitle">
          </div>
          <div class="form-group">
            <label for="noteFile">Note File (PDF)</label>
            <input type="file" id="noteFile" name="noteFile" accept=".pdf">
          </div>
          
          <h2>Video</h2>
          <div class="form-group">
            <label for="videoTitle">Video Title</label>
            <input type="text" id="videoTitle" name="videoTitle">
          </div>
          <div class="form-group">
            <label for="description">Video Description</label>
            <input type="text" id="description" name="description">
          </div>
          <div class="form-group">
            <label for="videoUrl">Video URL</label>
            <input type="text" id="videoUrl" name="videoUrl">
          </div>
          <div class="form-group">
            <label for="videoImage">Video Thumbnail</label>
            <input type="file" id="videoImage" name="videoImage" accept="image/*">
          </div>
          
          <button type="submit">Upload</button>
        </form>
      </body>
    </html>
  `);
});

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
