// src/routes/index.js
const express = require('express');
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express server!' });
});

module.exports = router;
