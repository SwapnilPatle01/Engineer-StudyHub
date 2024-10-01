// controllers/resourceController.js
import Resource from '../models/resource.model.js';
// const Resource=require('../models/resource.model')

// Create a new resource
export const createResource = async (req, res) => {
  try {
    const { university, branch, semester, subject, pyqTitle, noteTitle, videoTitle,description,videoUrl } = req.body;

    const resource = new Resource({
      university,
      branch,
      semester,
      subject,
      pyq: {
        title: pyqTitle,
        pdfUrl: req.files['pyqFile'] ? req.files['pyqFile'][0].path : null // Store the uploaded PDF path
      },
      note: {
        title: noteTitle,
        pdfUrl: req.files['noteFile'] ? req.files['noteFile'][0].path : null // Store the uploaded PDF path
      },
      video: {
        title: videoTitle,
        imageUrl: req.files['videoImage'] ? req.files['videoImage'][0].path : null, // Store the uploaded image path
        description: description,
        videoUrl: videoUrl
      }
    });
    await resource.save();
    res.status(201).json({ message: 'Resource created successfully', resource });
  } catch (error) {
    console.log(error,"error");
    res.status(500).json({ message: 'Failed to create resource', error });
  }
};

// Get all resources
export const getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch resources', error });
  }
};

// Get a resource by ID
export const getResourceById = async (req, res) => {
  try {
    console.log("hello");
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch resource', error });
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
    console.log(req.body,"request");
console.log(req.body.university);
    // Step 3: Update fields selectively
    if (req.body.university) existingResource.university = req.body.university;
    console.log(existingResource.university);
    if (req.body.branch) existingResource.branch = req.body.branch;
    if (req.body.semester) existingResource.semester = req.body.semester;
    if (req.body.subject) existingResource.subject = req.body.subject;

    // Handle pyq update
    if (req.body.pyqTitle || req.files) {
      existingResource.pyq.title = req.body.pyqTitle || existingResource.pyq.title;
      if (req.files && req.files['pyqFile']) {
        existingResource.pyq.pdfUrl = req.files['pyqFile'][0].path;
      }
    }

    // Handle note update
    if (req.body.noteTitle || req.files) {
      existingResource.note.title = req.body.noteTitle || existingResource.note.title;
      if (req.files && req.files['noteFile']) {
        existingResource.note.pdfUrl = req.files['noteFile'][0].path;
      }
    }

    // Handle video update
    if (req.body.videoTitle || req.files) {
      existingResource.video.title = req.body.videoTitle || existingResource.video.title;
      if (req.files && req.files['videoImage']) {
        existingResource.video.imageUrl = req.files['videoImage'][0].path;
      }
      existingResource.video.description = req.body.description || existingResource.video.description;
      existingResource.video.videoUrl = req.body.videoUrl || existingResource.video.videoUrl;
    }
    console.log(existingResource,"exits");

    // Step 4: Save the updated resource
    await existingResource.save();

    // Step 5: Return the updated resource
    res.status(200).json({ message: 'Resource updated successfully', updatedResource: existingResource });
  } catch (error) {
    console.log(error); // Log the error for debugging
    res.status(500).json({ message: 'Failed to update resource', error });
  }
};



// Delete a resource by ID
export const deleteResource = async (req, res) => {
  try {
    const deletedResource = await Resource.findByIdAndDelete(req.params.id);
    if (!deletedResource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    res.status(200).json({ message: 'Resource deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete resource', error });
  }
};
