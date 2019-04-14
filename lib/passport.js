'use strcit';

const passport = require('passport/lib');
const LocalStrategy = require('passport-local/lib').Strategy;

passport.use(new LocalStrategy((username, password, done) => {
  // TODO: ユーザの認証機構の実装
  if (username === 'username' && password === 'password') {
    return done(null, username);
  }

  return done(null, false);
}));
