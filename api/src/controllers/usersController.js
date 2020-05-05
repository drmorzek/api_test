const userS = require("../models/schems").usersModel;
const JWT = require("../models/jwt")();

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
    }, (err, users_one) => {
        if (err) throw err;
        let send;
        if (Object.keys(req.body).length != 0) {
            users_one.id = Number(req.params.id);
            users_one.email =
                req.body.email != null ? String(req.body.email) : users_one.email;
            users_one.password =
                req.body.password != null ?
                String(req.body.password) :
                users_one.password;

            send = users_one;
        }

        users_one.save((err) => {
            if (err) send = {
                message: err.message
            };

            res.send(send);
        });
    });
};

exports.add = (req, res) => {
    let token = JWT;
    // console.log(req.body);
    let secret = token.gen_secret().get_key();
    let passhash = token.get_token({ "password": String(req.body.password)});

    let send = {
        id: ((req.body.id) != undefined) ? Number(req.body.id) : Number(Math.floor(Math.random() * Date.now())),
        email: (req.body.email != undefined) ? String(req.body.email) : String(Date.now()) + '@some',
        password: String(passhash),
        key: JSON.stringify(secret),

        firstName: (req.body.firstName != undefined) ? String(req.body.firstName) : " ",
        lastName: (req.body.lastName != undefined) ? String(req.body.lastName) : " ",
        about: (req.body.about != undefined) ? String(req.body.about)  : " ",
        avatar: (req.files[0].filename != undefined) ? String(req.files[0].filename) : " "
    };

    let user = new userS(send);
    

    user.save((err, data) => {
        if (err) send = {
            message: err.message
        };
        // console.log(data);       

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

