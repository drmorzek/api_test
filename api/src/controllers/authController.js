const passport = require("../routes/mainRoute").passport;

exports.startpage = (req, res) => {
    res.send('startpage');
}

exports.register = (req, res) => {
    res.send('register');
}

exports.login_get = (req, res) => {
    let send;
    if (req.query.token == "5") {
        send = "acess";
    } else {
        send = "fail";
    }

    res.send(send);
}

exports.login_post = (req, res, next) => {
    passport.authenticate('local', {
            session: false
        },
        function (err, user) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.send('Укажите правильный email или пароль!');
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                return res.redirect('/admin');
            });
        })(req, res, next);
}

exports.logout = (req, res) => {
    req.logOut();
    res.redirect('/');
}

exports.admin = (req, res) => {
    res.send('Admin page!');
}