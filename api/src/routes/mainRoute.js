const express = require("express");
const bodyparser = require("body-parser");


const mainMiddleware = require("../utils/mainMiddleware");
const sessionMiddleware = require("../utils/sessionMiddleware");

const passport = require('../config/passport_config');



const app = express();


    app.use(sessionMiddleware.session);
    app.use(passport.initialize());
    app.use(passport.session());


    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({
        extended: true
    }));


    app.use(mainMiddleware.logResponse);
    app.use(mainMiddleware.sendError);





module.exports = {
    app: app,
    express: express,
    passport: passport,
};

