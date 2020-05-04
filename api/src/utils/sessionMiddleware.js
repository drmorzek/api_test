const session = require('express-session');

const FileStore = require('session-file-store')(session);
const jwt = require('../models/jwt')();

const session_secret = jwt.gen_super_key().get_secret();

const session_config = {    
    secret: session_secret,
    store: new FileStore({
        path: "./src/utils/session/"
    }),
    cookie: {
        path: './cookies/',
        httpOnly: true,
        maxAge:  1000,
    },
    resave: false,
    saveUninitialized: false
};



module.exports = {
    session: session(session_config)
}