const mainroute = require("./mainRoute")

const authsRouter = mainroute.express.Router();




authsRouter.get('/', (req, res) => {
    res.send('startpage');
});

authsRouter.get("/register", (req, res) => {
    res.send('register');
});

authsRouter.get("/login", (req, res) => {
    res.send('login');
});

authsRouter.get("/logout", (req, res) => {
    res.send('logout');
});

module.exports = authsRouter;