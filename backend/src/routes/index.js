const express = require('express');
const authRoutes = require('./auth');
const reportRoutes = require('./reports');
const dataRoutes = require('./data');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/reports', reportRoutes);
router.use('/data', dataRoutes);

module.exports = router;
