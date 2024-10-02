import express from "express";
import { registerUser, loginUser, updateUserProfile, deleteUserProfile, getAllUsers } from "../controllers/userController.js";
import {authenticateUser} from '../middlewares/authenticate.js'
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Update and delete profile (only for authenticated users)
router.put('/update', authenticateUser, updateUserProfile)
router.delete('/delete', authenticateUser, deleteUserProfile)
router.get('/all', authenticateUser, getAllUsers);   // Get all users (admins only)


export default router;