const app = require("./routes/mainRoute").app;


const newsRouter = require("./routes/newsRoute");
const usersRouter = require("./routes/usersRoute");
const authRouter = require("./routes/authRoute");

const JWT = require("./models/jwt");

const JWT1 = JWT();
const JWT2 = JWT();
// const JWT2 = new JWT();
console.log("==============1й экземпляр====================")
console.log(JWT1.new_key());
console.log(JWT1.get_token({"awfgsagsg":2423523}));
console.log(JWT1.verify());

console.log("===============2й экземпляр===================")
JWT2.set_key("afaenbguygehfuy")
console.log(JWT2.key);
console.log(JWT2.get_token({
    "awfgsagsg": 2423523
}));
console.log(JWT2.verify());
console.log(JWT2.new_key());

// console.log(key2);
console.log("===============цепочка===================")






const port = process.env.PORT || 3000;

app.use("/", authRouter);
app.use("/news", newsRouter);
app.use("/users", usersRouter);



app.listen(port, () => {
    console.log(`Сервер запустился на порту ${port}...`);
});