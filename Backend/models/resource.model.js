import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
  university: { type: String, required: true },
  branch: { type: String, required: true },
  semester: { type: String, required: true },
  subject: { type: String, required: true },
  
  // Resource types fields
  pyq: {
    title: { type: String, required: function() { return this.pyq.pdfUrl; } }, // Ensure title exists if pdfUrl exists
    pdfUrl: { type: String } // Store the URL of the uploaded PDF
  },
  note: {
    title: { type: String, required: function() { return this.note.pdfUrl; } }, // Ensure title exists if pdfUrl exists
    pdfUrl: { type: String } // Store the URL of the uploaded PDF
  },
  video: {
    title: { type: String, required: function() { return this.video.imageUrl || this.video.videoUrl; } }, // Ensure title exists if imageUrl or videoUrl exists
    imageUrl: { type: String }, // Store the URL of the uploaded image
    description: { type: String },
    videoUrl: { type: String } // Link to the video
  }
}, { timestamps: true });

// Custom validation to ensure at least one resource type is selected
ResourceSchema.pre('save', function (next) {
  if (!this.pyq.pdfUrl && !this.note.pdfUrl && !this.video.videoUrl) {
    return next(new Error('At least one resource type (pyq, note, or video) must be provided.'));
  }
  next();
});

// Exporting the Resource model
const Resource = mongoose.model("Resource", ResourceSchema);
export default Resource;
