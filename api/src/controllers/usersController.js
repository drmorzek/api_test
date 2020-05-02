const db = require("../models/db");
const schems_collect = require("../models/schems");

const userS = db.model(
    "User", schems_collect.usersSchema
);

exports.getAll = (req, res) => {
        userS.find().exec((err, newS) => {
            if (err) throw err;
            res.send(newS);
        });
    };

exports.getOne = (req, res) => {
    userS
        .find({
            id: Number(req.params.id),
        })
        .exec((err, data) => {
            if (err) throw err;
            res.send(data);
        });
    };

exports.replace = (req, res) => {
    userS.findOne({
        id: Number(req.params.id)
    }, (err, news_one) => {
        if (err) throw err;
        let send;
        if (Object.keys(req.body).length != 0) {
            news_one.id = Number(req.params.id);
            news_one.email =
                req.body.email != null ? String(req.body.email) : news_one.email;
            news_one.password =
                req.body.password != null ?
                String(req.body.password) :
                news_one.password;

            send = news_one;
        }

        news_one.save((err) => {
            if (err) send = {
                message: err.message
            };

            res.send(send);
        });
    });
};

exports.add = (req, res) => {
    let send = {
        id: Number(req.body.id),
        email: String(req.body.email),
        password: String(req.body.password),
    };

    let user = new userS(send);

    user.save((err) => {
        if (err) send = {
            message: err.message
        };
        res.send(send);
    });
};

exports.delete = (req, res) => {
    userS.where().findOneAndDelete({
        id: Number(req.params.id)
    }, (err, elem) => {
        if (err) elem = {
            message: err.message
        };

        res.send(
            (elem != null) ? elem : {
                message: `Пользователь с id= ${req.params.id} уже давно удален`
            }
        );
    });
};

