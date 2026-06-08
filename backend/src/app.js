const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const { initDatabase } = require('./utils/database');
const { initBullQueue } = require('./utils/taskQueue');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize database
initDatabase();

// Initialize task queue
initBullQueue();

// Routes
app.use('/api', routes);

module.exports = app;
