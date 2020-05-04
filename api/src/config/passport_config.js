const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const userS = require("../models/schems").usersModel;

const JWT = require("../models/jwt")();

function auth(bodypassword, key) {
  let findtoken = JWT;
  findtoken.set_key(key);
  findtoken.get_token({
    password: String(bodypassword)
  });
  return findtoken.verify().password == bodypassword;
}

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
    // console.log(email);
    console.log(password);

    // console.log(auth(email, password));
    
    userS.findOne({
      "email": email
    },(err, user) => {
      console.log(auth(password, user.key) );
      if (auth(password, user.key)) {
         done(null, user);
      } else {
         done(null, false);
      }
    });    
  })
);

module.exports = passport;
