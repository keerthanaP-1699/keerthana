require("dotenv").config();
let { queryPromisified } = require("../routes/loginRoutes");
let _ = require("lodash");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.client_ID,
      clientSecret: process.env.client_Secret,
      callbackURL: process.env.callback_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      let users = {
        email: profile._json.email,
        firstname: profile._json.given_name,
        lastname: profile._json.family_name,
      };
      let sql1 = "SELECT email FROM users WHERE email = ? ";
      let param = users.email;
      let sql = "insert into users set ?";
      let params = users;

      try {
        const data = queryPromisified(sql1, param);
        if (!_.isEmpty(data)) {
          queryPromisified(sql, params);
          return done(null, profile);
        } else {
          return done(null, profile);
        }
      } catch (error) {
        return error;
      }
    }
  )
);
