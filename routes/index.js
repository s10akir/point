const { Router } = require('express');

const router = Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

router.post('/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    const token = jwt.sign({ user: req.user }, 'secret');

    res.json({
      token
    });
  });

module.exports = router;
