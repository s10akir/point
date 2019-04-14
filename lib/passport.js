'use strcit';

const passport = require('passport/lib');
const LocalStrategy = require('passport-local/lib').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');


passport.use(new LocalStrategy((username, password, done) => {
  // TODO: ユーザの認証機構の実装
  if (username === 'username' && password === 'password') {
    return done(null, username);
  }

  return done(null, false);
}));

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret'
}, (payload, done) => done(null, payload)));
