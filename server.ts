import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Train routes
app.get('/trains', (req, res) => {
    res.status(200).json({ message: 'List of trains' });
});

app.post('/trains', (req, res) => {
    const trainData = req.body;
    res.status(201).json({ message: 'Train created', trainData });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
