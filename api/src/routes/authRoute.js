const mainroute = require("./mainRoute")

const authsRouter = mainroute.express.Router();


authsRouter.get('/', (req, res) => {
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

authsRouter.get("/logout", (req, res) => {
    res.send('logout');
});

module.exports = authsRouter;