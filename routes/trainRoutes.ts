import { Router } from 'express';

const router = Router();

// Example train routes

// Get all trains
router.get('/trains', (req, res) => {
    res.send('Get all trains');
});

// Get train by ID
router.get('/trains/:id', (req, res) => {
    res.send(`Get train with ID: ${req.params.id}`);
});

// Create a new train
router.post('/trains', (req, res) => {
    res.send('Create a new train');
});

// Update train by ID
router.put('/trains/:id', (req, res) => {
    res.send(`Update train with ID: ${req.params.id}`);
});

// Delete train by ID
router.delete('/trains/:id', (req, res) => {
    res.send(`Delete train with ID: ${req.params.id}`);
});

export default router;