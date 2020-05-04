const session = require('express-session');

const FileStore = require('session-file-store')(session);
const jwt = require('../models/jwt')();

const session_secret = jwt.gen_super_key().get_secret();
const FileStore_secret = jwt.gen_super_key().get_secret();

const session_config = {
    
    secret: session_secret,
    store: new FileStore({
        path: "./src/utils/session/",
        secret: FileStore_secret
    }),
    cookie: {
        path: './cookies/',
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: false,
}


module.exports = () => session(session_config);