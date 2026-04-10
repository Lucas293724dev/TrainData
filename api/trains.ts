// train.routes.ts

import { Router } from 'express';

const router = Router();

// Dummy data for trains
const trains = [
    { id: 1, name: 'Express', destination: 'Station A', status: 'on_time' },
    { id: 2, name: 'Local', destination: 'Station B', status: 'delayed' },
    { id: 3, name: 'Intercity', destination: 'Station C', status: 'cancelled' },
];

// Get all trains
router.get('/trains', (req, res) => {
    res.json(trains);
});

// Filter trains by destination
router.get('/trains/destination/:destination', (req, res) => {
    const destination = req.params.destination;
    const filteredTrains = trains.filter(train => train.destination === destination);
    res.json(filteredTrains);
});

// Filter trains by status
router.get('/trains/status/:status', (req, res) => {
    const status = req.params.status;
    const filteredTrains = trains.filter(train => train.status === status);
    res.json(filteredTrains);
});

// Update a train's status
router.put('/trains/:id', (req, res) => {
    const trainId = parseInt(req.params.id);
    const { status } = req.body;
    const train = trains.find(t => t.id === trainId);
    if (train) {
        train.status = status;
        res.json(train);
    } else {
        res.status(404).send('Train not found');
    }
});

export default router;