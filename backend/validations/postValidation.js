const { check, validationResult } = require('express-validator');

exports.validatePost = [
  check('title').notEmpty().withMessage('Title is required'),
  check('content').notEmpty().withMessage('Content is required'),
  check('author').notEmpty().withMessage('Author is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
