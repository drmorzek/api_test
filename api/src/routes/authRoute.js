
const mainroute = require("./mainRoute");
const passport = require("./mainRoute").passport;

const authsRouter = mainroute.express.Router();


authsRouter.get('/', (req, res) => {
    console.log(req.session);
    res.send('startpage');
});

authsRouter.get("/register", (req, res) => {
    res.send('register');
});

authsRouter.get("/login", (req, res) => {
    let send;
    if (req.query.token == "5") {
        send = "acess";
    } else{
        send = "fail";
    }

    res.send(send);
});

authsRouter.post('/login', (req, res, next) => {
    passport.authenticate('local', function (err, user) {
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
})


authsRouter.get("/logout", (req, res) => {
    res.send('logout');
});

module.exports = authsRouter;