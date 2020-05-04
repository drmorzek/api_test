const newsSchema = {
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
        default: 'Empty text'
    },
    content: {
        type: String,
        required: true,
        default: 'Empty text'
    },
};

const usersSchema = {
    id: {
        type: Number,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        default: String(Date.now())+'@some'
    },
    password: {
        type: String,
        required: true,
        default: 'Some'
    },
    key: {
        type: String
    }
};




const db = require("./db");

module.exports = {
    newsModel: db.model(
        "New", newsSchema
    ),
    usersModel: db.model(
        "User", usersSchema
    )
};