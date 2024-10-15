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
// / File Filter to Allow Only Images (PNG, JPG, JPEG)
const fileImageFilter = (req, file, cb) => {
  const allowedTypes = /png|jpg|jpeg/;
  const extName = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimeType = allowedTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Only image files (PNG, JPG, JPEG) are allowed"), false); // Reject non-image files
  }
};


// Exporting upload middleware
export const uploadFilesImages = multer({
  storage: storage,
  fileImageFilter: fileImageFilter,
});

// Exporting upload middleware
export const uploadFiles = multer({
  storage: storage,
  fileFilter: fileFilter,
});
