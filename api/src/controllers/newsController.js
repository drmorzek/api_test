const newS = require("../models/schems").usersModel;

exports.getAll = (req, res) => {
        newS.find().exec((err, newS) => {
            if (err) throw err;
            res.send(newS);
        });
    };

exports.getOne = (req, res) => {
    newS
        .find({
            id: Number(req.params.id),
        })
        .exec((err, data) => {
            if (err) throw err;
            res.send(data);
        });
    };

exports.replace = (req, res) => {
    newS.findOne({
        id: Number(req.params.id)
    }, (err, news_one) => {
        if (err) throw err;
        let send;
        if (Object.keys(req.body).length != 0) {
            news_one.id = Number(req.params.id);
            news_one.title =
                req.body.title != null ? String(req.body.title) : news_one.title;
            news_one.content =
                req.body.content != null ?
                String(req.body.content) :
                news_one.content;

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
        title: String(req.body.title),
        content: String(req.body.content),
    };

    let news_one = new newS(send);

    news_one.save((err) => {
        if (err) send = {
            message: err.message
        };
        res.send(send);
    });
};

exports.delete = (req, res) => {
    newS.where().findOneAndDelete({
        id: Number(req.params.id)
    }, (err, elem) => {
        if (err) elem = {
            message: err.message
        };

        res.send(
            (elem != null) ? elem : {
                message: `Новость с id= ${req.params.id} уже давно удалена`
            }
        );
    });
};

