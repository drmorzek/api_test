const url = "mongodb+srv://root:a1a2a3a4a5a6@cluster0-s5gud.mongodb.net/test?retryWrites=true&w=majority";

const params = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};


module.exports = {
    url: url,
    params: params
};