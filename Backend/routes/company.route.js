import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany,deleteCompany  } from "../controllers/company.controller.js";
import { uploadFilesImages } from "../middlewares/resourcemulter.js";

const router = express.Router();

// router.route("/register").post(isAuthenticated,registerCompany);
router.route("/register").post(isAuthenticated, uploadFilesImages.single('logo'), registerCompany);

router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,uploadFilesImages.single('logo'), updateCompany);
router.delete('/delete',isAuthenticated,deleteCompany);

export default router;

