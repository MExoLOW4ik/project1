const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Example data array
const data = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  text: `Item ${index + 1}`,
}));

// API endpoint to get filtered data
app.get('/api/data', (req, res) => {
  const { limit } = req.query; // Get limit from query string (e.g., ?limit=10)
  const limitedData = data.slice(0, limit ? parseInt(limit) : data.length);
  res.json(limitedData);
});

// Serve static files (e.g., HTML pages)
app.use(express.static(path.join(__dirname, 'public')));

// Route for "About Us" page
app.get('/about-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
