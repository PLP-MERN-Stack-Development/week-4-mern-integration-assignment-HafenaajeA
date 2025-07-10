const express = require('express');
const { body, param, validationResult } = require('express-validator');
const Post = require('../models/Post');

const router = express.Router();

// GET /api/posts
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find().populate('category');
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

// GET /api/posts/:id
router.get('/:id', [
  param('id').isMongoId()
], async (req, res, next) => {
  try {
    validationResult(req).throw();
    const post = await Post.findById(req.params.id).populate('category');
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    next(err);
  }
});

// POST /api/posts
router.post('/', [
  body('title').notEmpty(),
  body('content').notEmpty(),
  body('category').isMongoId()
], async (req, res, next) => {
  try {
    validationResult(req).throw();
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

// PUT /api/posts/:id
router.put('/:id', [
  param('id').isMongoId(),
  body('title').optional().notEmpty(),
  body('content').optional().notEmpty(),
  body('category').optional().isMongoId()
], async (req, res, next) => {
  try {
    validationResult(req).throw();
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/posts/:id
router.delete('/:id', [
  param('id').isMongoId()
], async (req, res, next) => {
  try {
    validationResult(req).throw();
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
