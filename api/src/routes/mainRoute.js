const express = require("express");
const bodyparser = require("body-parser");

const mainMiddleware = require("../utils/mainMiddleware");
const sessionMiddleware = require("../utils/sessionMiddleware")();

const app = express();



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));


app.use(sessionMiddleware);

app.use(mainMiddleware.logResponse);
app.use(mainMiddleware.sendError);


module.exports = {
    app: app,
    express: express
};

