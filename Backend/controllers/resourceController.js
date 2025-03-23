// controllers/resourceController.js
import Resource from '../models/resource.model.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name properly in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to convert absolute path to relative URL path
const getRelativePath = (absolutePath) => {
  if (!absolutePath) return null;
  
  // If it's already a relative path, return it
  if (absolutePath.startsWith('/uploads')) {
    return absolutePath;
  }
  
  // Extract the filename from the absolute path
  const filename = path.basename(absolutePath);
  
  // Determine the type of file based on the path
  if (absolutePath.includes('pdfs')) {
    return `/uploads/pdfs/${filename}`;
  } else if (absolutePath.includes('images')) {
    return `/uploads/images/${filename}`;
  }
  
  // Default case
  return `/uploads/${filename}`;
};

// Create a new resource
export const createResource = async (req, res) => {
  try {
    console.log("Form fields:", req.body); // Log form fields
    console.log("Uploaded files:", req.files); // Log uploaded files

    const { university, branch, semester, subject, pyqTitle, noteTitle, videoTitle, description, videoUrl } = req.body;

    // Get relative paths for files
    const pyqPath = req.files['pyqFile'] ? getRelativePath(req.files['pyqFile'][0].path) : null;
    const notePath = req.files['noteFile'] ? getRelativePath(req.files['noteFile'][0].path) : null;
    const imagePath = req.files['videoImage'] ? getRelativePath(req.files['videoImage'][0].path) : null;

    const resource = new Resource({
      university,
      branch,
      semester,
      subject,
      pyq: {
        title: pyqTitle,
        pdfUrl: pyqPath
      },
      note: {
        title: noteTitle,
        pdfUrl: notePath
      },
      video: {
        title: videoTitle,
        imageUrl: imagePath,
        description: description,
        videoUrl: videoUrl
      }
    });

    await resource.save();
    res.status(201).json({ message: 'Resource created successfully', resource });
  } catch (error) {
    console.log("Error during resource creation:", error);
    res.status(500).json({ message: 'Failed to create resource', error: error.message });
  }
};

// Get all resources
export const getAllResources = async (req, res) => {
  try {
    // Get query parameters for filtering
    const { university, branch, semester, subject } = req.query;
    
    // Build filter object
    const filter = {};
    if (university) filter.university = university;
    if (branch) filter.branch = branch;
    if (semester) filter.semester = semester;
    if (subject) filter.subject = subject;
    
    console.log("Applying filter:", filter);
    
    const resources = await Resource.find(filter);
    
    // Process resources to ensure proper file paths
    const processedResources = resources.map(resource => {
      const resourceObj = resource.toObject();
      
      // Fix pyq path if it exists
      if (resourceObj.pyq && resourceObj.pyq.pdfUrl) {
        resourceObj.pyq.pdfUrl = getRelativePath(resourceObj.pyq.pdfUrl);
      }
      
      // Fix note path if it exists
      if (resourceObj.note && resourceObj.note.pdfUrl) {
        resourceObj.note.pdfUrl = getRelativePath(resourceObj.note.pdfUrl);
      }
      
      // Fix video image path if it exists
      if (resourceObj.video && resourceObj.video.imageUrl) {
        resourceObj.video.imageUrl = getRelativePath(resourceObj.video.imageUrl);
      }
      
      return resourceObj;
    });
    
    res.status(200).json(processedResources);
  } catch (error) {
    console.error("Error fetching resources:", error);
    res.status(500).json({ message: 'Failed to fetch resources', error: error.message });
  }
};

// Get a resource by ID
export const getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    
    // Convert to object to modify
    const resourceObj = resource.toObject();
    
    // Fix file paths
    if (resourceObj.pyq && resourceObj.pyq.pdfUrl) {
      resourceObj.pyq.pdfUrl = getRelativePath(resourceObj.pyq.pdfUrl);
    }
    
    if (resourceObj.note && resourceObj.note.pdfUrl) {
      resourceObj.note.pdfUrl = getRelativePath(resourceObj.note.pdfUrl);
    }
    
    if (resourceObj.video && resourceObj.video.imageUrl) {
      resourceObj.video.imageUrl = getRelativePath(resourceObj.video.imageUrl);
    }
    
    res.status(200).json(resourceObj);
  } catch (error) {
    console.error("Error fetching resource by ID:", error);
    res.status(500).json({ message: 'Failed to fetch resource', error: error.message });
  }
};

// Update a resource by ID
export const updateResource = async (req, res) => {
  try {
    // Step 1: Find the resource by ID
    const existingResource = await Resource.findById(req.params.id);
    
    // Step 2: Check if resource exists
    if (!existingResource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    
    console.log("Update request:", req.body);
    
    // Step 3: Update fields selectively
    if (req.body.university) existingResource.university = req.body.university;
    if (req.body.branch) existingResource.branch = req.body.branch;
    if (req.body.semester) existingResource.semester = req.body.semester;
    if (req.body.subject) existingResource.subject = req.body.subject;

    // Handle pyq update
    if (req.body.pyqTitle || (req.files && req.files['pyqFile'])) {
      if (!existingResource.pyq) existingResource.pyq = {};
      if (req.body.pyqTitle) existingResource.pyq.title = req.body.pyqTitle;
      if (req.files && req.files['pyqFile']) {
        existingResource.pyq.pdfUrl = getRelativePath(req.files['pyqFile'][0].path);
      }
    }

    // Handle note update
    if (req.body.noteTitle || (req.files && req.files['noteFile'])) {
      if (!existingResource.note) existingResource.note = {};
      if (req.body.noteTitle) existingResource.note.title = req.body.noteTitle;
      if (req.files && req.files['noteFile']) {
        existingResource.note.pdfUrl = getRelativePath(req.files['noteFile'][0].path);
      }
    }

    // Handle video update
    if (req.body.videoTitle || req.body.description || req.body.videoUrl || (req.files && req.files['videoImage'])) {
      if (!existingResource.video) existingResource.video = {};
      if (req.body.videoTitle) existingResource.video.title = req.body.videoTitle;
      if (req.body.description) existingResource.video.description = req.body.description;
      if (req.body.videoUrl) existingResource.video.videoUrl = req.body.videoUrl;
      if (req.files && req.files['videoImage']) {
        existingResource.video.imageUrl = getRelativePath(req.files['videoImage'][0].path);
      }
    }

    // Step 4: Save the updated resource
    await existingResource.save();
    
    // Step 5: Return the updated resource with fixed paths
    const updatedResource = existingResource.toObject();
    
    // Fix file paths
    if (updatedResource.pyq && updatedResource.pyq.pdfUrl) {
      updatedResource.pyq.pdfUrl = getRelativePath(updatedResource.pyq.pdfUrl);
    }
    
    if (updatedResource.note && updatedResource.note.pdfUrl) {
      updatedResource.note.pdfUrl = getRelativePath(updatedResource.note.pdfUrl);
    }
    
    if (updatedResource.video && updatedResource.video.imageUrl) {
      updatedResource.video.imageUrl = getRelativePath(updatedResource.video.imageUrl);
    }
    
    res.status(200).json(updatedResource);
  } catch (error) {
    console.error("Error updating resource:", error);
    res.status(500).json({ message: 'Failed to update resource', error: error.message });
  }
};

// Delete a resource by ID
export const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    res.status(200).json({ message: 'Resource deleted successfully' });
  } catch (error) {
    console.error("Error deleting resource:", error);
    res.status(500).json({ message: 'Failed to delete resource', error: error.message });
  }
};
