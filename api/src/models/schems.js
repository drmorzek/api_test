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
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        default: 'Some'
    },
};

module.exports = {
    newsSchema: newsSchema,
    usersSchema: usersSchema
};