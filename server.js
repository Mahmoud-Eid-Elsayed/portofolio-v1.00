const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from multiple directories
app.use(express.static(path.join(__dirname, 'src', 'static')));
app.use('/assets', express.static(path.join(__dirname, 'src', 'assets')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
// add route to serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/static/index.html'));
});

// Endpoint to get environment variables
app.get('/env', (req, res) => {
  res.json({
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});