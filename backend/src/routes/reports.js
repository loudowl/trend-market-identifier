const express = require('express');
const { getReport } = require('../controllers/reportController');

const router = express.Router();

router.get('/:type', getReport);

module.exports = router;
