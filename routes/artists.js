const path = require('path');
const express = require('express');
const router = express.Router();

const artistController = require('../controllers/artist');

router.get('/artist/:id', artistController.getArtist);

module.exports = router;
