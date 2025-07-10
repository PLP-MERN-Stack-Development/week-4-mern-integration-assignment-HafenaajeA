const express = require('express');
const { body, validationResult } = require('express-validator');
const Category = require('../models/Category');

const router = express.Router();

// GET /api/categories
router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    next(err);
  }
});

// POST /api/categories
router.post('/', [
  body('name').notEmpty()
], async (req, res, next) => {
  try {
    validationResult(req).throw();
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
