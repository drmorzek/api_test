const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send({
        message: "Что-то пошло не так",
        type: String(error.type),
        error: String(error.message),
    });
});

module.exports = {
    app: app,
    express: express
};

