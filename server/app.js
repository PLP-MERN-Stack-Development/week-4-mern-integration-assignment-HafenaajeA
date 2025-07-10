const express = require('express');
const mongoose = require('mongoose');
const postsRouter = require('./routes/posts');
const categoriesRouter = require('./routes/categories');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// API routes
app.use('/api/posts', postsRouter);
app.use('/api/categories', categoriesRouter);

// Error handling middleware
app.use(errorHandler);

module.exports = app;