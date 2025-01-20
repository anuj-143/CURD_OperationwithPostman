import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import route from './Router/router.js'; // Adjust the path as per your folder structure

const app = express();
const PORT = process.env.PORT || 3000; // Use port from .env or default to 3000

// Middleware to parse JSON
app.use(express.json());

// Use the imported route
app.use('/api/user', route); 

const MONGOURL = process.env.MONGO_URL;
mongoose.connect(MONGOURL).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error: ", error);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
