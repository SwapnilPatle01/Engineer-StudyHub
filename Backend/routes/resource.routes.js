// routes/resource.routes.js
import express from 'express';
import { createResource, getAllResources, getResourceById, updateResource, deleteResource } from '../controllers/resourceController.js';
import { uploadFiles } from '../middlewares/resourcemulter.js';
import Resource from '../models/resource.model.js';

const router = express.Router();

// Create a new resource
router.post('/',
    uploadFiles.fields([
        { name: 'pyqFile', maxCount: 1 },
        { name: 'noteFile', maxCount: 1 },
        { name: 'videoImage', maxCount: 1 }
    ]),
    createResource
);

// Get metadata (universities, branches, etc.)
router.get('/metadata', async(req, res) => {
    try {
        // Get unique universities
        const universities = await Resource.distinct('university');

        res.status(200).json({
            universities: universities || []
        });
    } catch (error) {
        console.error("Error fetching metadata:", error);
        res.status(500).json({ message: 'Failed to fetch metadata', error: error.message });
    }
});

// Get branches for a university
router.get('/branches/:university', async(req, res) => {
    try {
        const { university } = req.params;

        // Get unique branches for the university
        const branches = await Resource.distinct('branch', { university });

        res.status(200).json({
            branches: branches || []
        });
    } catch (error) {
        console.error("Error fetching branches:", error);
        res.status(500).json({ message: 'Failed to fetch branches', error: error.message });
    }
});

// Get semesters for a branch
router.get('/semesters/:branch', async(req, res) => {
    try {
        const { branch } = req.params;

        // Get unique semesters for the branch
        const semesters = await Resource.distinct('semester', { branch });

        res.status(200).json({
            semesters: semesters || []
        });
    } catch (error) {
        console.error("Error fetching semesters:", error);
        res.status(500).json({ message: 'Failed to fetch semesters', error: error.message });
    }
});

// Get subjects for a branch and semester
router.get('/subjects/:branch', async(req, res) => {
    try {
        const { branch } = req.params;
        const { semester } = req.query;

        // Build filter
        const filter = { branch };
        if (semester) filter.semester = semester;

        // Get unique subjects for the branch and semester
        const subjects = await Resource.distinct('subject', filter);

        res.status(200).json({
            subjects: subjects || []
        });
    } catch (error) {
        console.error("Error fetching subjects:", error);
        res.status(500).json({ message: 'Failed to fetch subjects', error: error.message });
    }
});

// Get all resources
router.get('/resources', getAllResources);

// Get a resource by ID
router.get('/:id', getResourceById);

// Update a resource by ID
router.put('/:id',
    uploadFiles.fields([
        { name: 'pyqFile', maxCount: 1 },
        { name: 'noteFile', maxCount: 1 },
        { name: 'videoImage', maxCount: 1 }
    ]),
    updateResource
);

// Delete a resource by ID
router.delete('/:id', deleteResource);

// Export the router as default
export default router;