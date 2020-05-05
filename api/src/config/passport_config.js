const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const userS = require("../models/schems").usersModel;

const JWT = require("../models/jwt")();


passport.serializeUser(function(user, done) {
  
  console.log('Сериализация: ', user);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('Десериализация: ', id);
  const user = userDB.id === id ? userDB : false;
  done(null, user);
});

passport.use(
  new LocalStrategy({ usernameField: 'email' }, function(
    email,
    password,
    done
  ) {
    let auth = JWT;
    userS.findOne({
      "email": email
    },(err, user) => {
      if (user && auth.auth(user.password, user.key) === password) {
         done(null, user);
      } else {
         done(null, false);
      }
    });    
  })
);

module.exports = passport;
