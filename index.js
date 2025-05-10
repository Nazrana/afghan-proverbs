const express = require('express');
require('dotenv').config();
const cors = require('cors'); 

const app = express();
const proverbsRoutes = require('./routes/proverbs');

app.get('/', (req, res) => {
    res.send('Server is running...');
  })

// Middleware
app.use(cors()); 
app.use(express.json());

// Routes
app.use('/proverbs', proverbsRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
