import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
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
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Create uploads directories if they don't exist
const uploadDirs = ['uploads', 'uploads/pdfs', 'uploads/images'];
uploadDirs.forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Created directory: ${dirPath}`);
    }
});

// ✅ API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/resource", addResourceRoute);

// ✅ Health Check Endpoint
app.get("/health", (req, res) => {
    res.status(200).json({ status: "UP" });
});

// ✅ Explicitly handle PDF files with proper Content-Type
app.get('/uploads/pdfs/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', 'pdfs', filename);

    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`PDF file not found: ${filePath}`);
            return res.status(404).send('PDF not found');
        }

        // Set correct PDF content type
        res.setHeader('Content-Type', 'application/pdf');

        // Log successful serving
        console.log(`Serving PDF: ${filePath}`);

        // Stream the file instead of loading it all into memory
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);

        // Handle potential errors during streaming
        fileStream.on('error', (error) => {
            console.error(`Error streaming PDF: ${error.message}`);
            if (!res.headersSent) {
                res.status(500).send('Error serving PDF');
            }
        });
    });
});

// ✅ Handle images with proper Content-Type
app.get('/uploads/images/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', 'images', filename);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send('Image not found');
        }

        // Determine content type based on extension
        const ext = path.extname(filename).toLowerCase();
        let contentType = 'image/jpeg'; // default

        if (ext === '.png') contentType = 'image/png';
        else if (ext === '.gif') contentType = 'image/gif';
        else if (ext === '.svg') contentType = 'image/svg+xml';

        res.setHeader('Content-Type', contentType);

        // Stream the file
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);

        fileStream.on('error', (error) => {
            if (!res.headersSent) {
                res.status(500).send('Error serving image');
            }
        });
    });
});

// ✅ Serve general uploads (fallback for other file types)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Serve Frontend Build
app.use(express.static(path.join(__dirname, "..", "Frontend", "build")));
app.get("*", (req, res) => {
    const indexPath = path.resolve(__dirname, "..", "Frontend", "build", "index.html");
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(200).send("Engineer Study Hub");
    }
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

// ✅ Connect to MongoDB before starting the server
const PORT = process.env.PORT || 5000;

(async() => {
    try {
        await connectDB();
        console.log("✅ MongoDB connected successfully.");

        // ✅ Start the server only after DB connection
        const server = app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
            console.log(`📄 PDF files available at: http://localhost:${PORT}/uploads/pdfs/[filename]`);
            console.log(`🖼️ Images available at: http://localhost:${PORT}/uploads/images/[filename]`);
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