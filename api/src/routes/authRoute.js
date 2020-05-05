
const mainroute = require("./mainRoute");
const passport = mainroute.passport;
const authsRouter = mainroute.express.Router();

const authController = require('../controllers/authController');


authsRouter.get('/', authController.startpage);
authsRouter.get("/register", authController.register);
authsRouter.get("/login", authController.login_get);
authsRouter.post('/login', authController.login_post);
authsRouter.get("/logout", authController.logout);

const auth = (req, res, next) => {
    console.log(req.isAuthenticated());
    next()
};

authsRouter.get('/admin', auth, authController.admin);

module.exports = authsRouter;