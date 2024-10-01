// routes/userRoutes.js
import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

// POST: /api/v1/user/register
router.post("/register", registerUser);

export default router;
