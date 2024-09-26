const express = require('express');
const { createTag, getAllTags } = require('../controllers/tagController');
const router = express.Router();

// Create a new tag
router.post('/', createTag);
// Get all tags
router.get('/', getAllTags);

module.exports = router;
