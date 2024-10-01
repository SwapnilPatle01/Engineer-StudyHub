// routes/resource.routes.js
import express from 'express';
import { createResource, getAllResources, getResourceById, updateResource, deleteResource } from '../controllers/resourceController.js';
import { uploadFiles} from '../middlewares/resourcemulter.js';

const router = express.Router();

// Create a new resource
router.post('/create', 
  uploadFiles.fields([
    { name: 'pyqFile', maxCount: 1 },
    { name: 'noteFile', maxCount: 1 },
    { name: 'videoImage', maxCount: 1 }
  ]), 
  createResource
);


// Get all resources
router.get('/resources', getAllResources);

// Get a resource by ID
router.get('/:id', getResourceById);


// Update a resource by ID
router.put('/:id', uploadFiles.fields([{ name: 'pyqFile' }, { name: 'noteFile' }, { name: 'videoImage' }]), updateResource);


// Delete a resource by ID
router.delete('/:id', deleteResource);

// Export the router as default
export default router;
