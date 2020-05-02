const mongo = require("mongoose");
const mongo_config = require('../config/mongo_config');

mongo
    .connect(
        mongo_config.url,
        mongo_config.params
    )
    .then(
        () => {
            console.log("Соединение с базой успешно");
        },
        (err) => {
            console.log(err);
        }
    );

const Schema = mongo.Schema;

exports.model = (name, schema) =>{
    return mongo.model(name, new Schema(schema));
};