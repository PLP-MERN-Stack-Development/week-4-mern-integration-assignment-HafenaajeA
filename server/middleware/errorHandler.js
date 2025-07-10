function errorHandler(err, req, res, next) {
  if (err.errors) {
    // express-validator errors
    return res.status(400).json({ errors: err.array ? err.array() : err.errors });
  }
  res.status(500).json({ error: err.message || 'Internal Server Error' });
}

module.exports = errorHandler;
