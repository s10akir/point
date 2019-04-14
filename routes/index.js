const { Router } = require('express');

const router = Router();
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
    res.json({
      user: req.user
    });
  });

module.exports = router;
