require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const morgan = require('morgan');
const postRoutes = require('./routes/postRoutes');
const tagRoutes = require('./routes/tagRoutes');
const errorHandlerMiddleware = require('./middleware/errorHandler');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/tags', tagRoutes);


// Error handling
app.use(errorHandlerMiddleware);

module.exports = app;
