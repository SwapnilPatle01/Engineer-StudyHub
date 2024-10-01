import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import addResourceRoute from "./routes/resource.routes.js";

//  const userRoute= require('./routes/userRoutes.js')
import userRoute from "./routes/userRoutes.js";

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/resource", addResourceRoute);

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error details to the console
  res.status(500).json({ message: "Server error" });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Engineer Study Hub");
});
