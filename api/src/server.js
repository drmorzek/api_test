const app = require("./routes/mainRoute").app;


const newsRouter = require("./routes/newsRoute");
const usersRouter = require("./routes/usersRoute");
const authRouter = require("./routes/authRoute");

const JWT = require("./models/jwt");

var payload = {
    "awfgsagsg": 2423523,
    "fffffffffff": "afesagfagag"
};

// const JWT2 = new JWT();
console.log("==============Сгенерирован ключ====================")
const JWT1 = JWT();
console.log(JWT1.new().get());
console.log(JWT1.get_token(payload));
console.log(JWT1.verify());

console.log("===============Свой ключ===================")
const JWT2 = JWT();
JWT2.set("afaenbguygehfuy");
console.log(JWT2.get());
console.log(JWT2.get_token(payload));
console.log(JWT2.verify());
// console.log(JWT2.new().get());

// console.log(key2);
console.log("===============цепочка===================")






const port = process.env.PORT || 3000;

app.use("/", authRouter);
app.use("/news", newsRouter);
app.use("/users", usersRouter);



app.listen(port, () => {
    console.log(`Сервер запустился на порту ${port}...`);
});