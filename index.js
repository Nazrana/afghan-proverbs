const express = require('express');
require('dotenv').config();
const cors = require('cors'); // ← اضافه کن

const app = express();
const proverbsRoutes = require('./routes/proverbs');

// Middleware
app.use(cors()); // ← اضافه کن
app.use(express.json());

// Routes
app.use('/proverbs', proverbsRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
