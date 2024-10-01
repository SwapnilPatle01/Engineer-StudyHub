import multer from "multer";
import path from "path";

// Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "pyqFile" || file.fieldname === "noteFile") {
      cb(null, "uploads/pdfs"); // Specify the directory for PDF uploads
    } else if (file.fieldname === "videoImage") {
      cb(null, "uploads/images");
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// File filter to ensure only specific files are accepted
const fileFilter = (req, file, cb) => {
  const allowedTypes = /pdf|png|jpg|jpeg/;
  const extName = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimeType = allowedTypes.test(file.mimetype);

  if (extName && mimeType) {
    return cb(null, true);
  } else {
    return cb(new Error("Only PDF and image files are allowed"), false);
  }
};

// Exporting upload middleware
export const uploadFiles = multer({
  storage: storage,
  fileFilter: fileFilter,
});
