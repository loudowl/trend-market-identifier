const express = require('express');
const { fetchData } = require('../controllers/dataController');

const router = express.Router();

router.get('/fetch', fetchData);

module.exports = router;
