const app = require("./routes/mainRoute").app;


const newsRouter = require("./routes/newsRoute");
const usersRouter = require("./routes/usersRoute");
const authRouter = require("./routes/authRoute");

const JWT = require("./models/jwt");


console.log("==============Данные====================");
var payload = { id: 136345, email: "test@mail.ru", password: "123" };
console.log(payload)

// const JWT2 = new JWT();
console.log("==============Сгенерирован ключ====================")
const JWT1 = JWT();
JWT1.gen_OKP()
console.log(JWT1.get_secret());
console.log(JWT1.get_key());
console.log(JWT1.get_token(payload));
console.log(JWT1.verify());

console.log("===============Супер ключ===================")
const JWT2 = JWT();
// console.log(key);
JWT2.gen_super_key();
console.log(JWT2.get_secret())
console.log(JWT2.get_key())
console.log(JWT2.get_token(payload));
console.log(JWT2.verify());
// console.log(JWT2.new().get());

// console.log(key2);
console.log("===============Без указания ключа===================")
const JWT3 = JWT();
// console.log(key);
console.log(JWT3.get_secret())
console.log(JWT3.get_key())
console.log(JWT3.get_token(payload));
console.log(JWT3.verify());

console.log("===============С указанным ключом===================")
const JWT4 = JWT();
JWT4.set_key("anykey")
// console.log(key);
console.log(JWT4.get_secret())
console.log(JWT4.get_key())
console.log(JWT4.get_token(payload));
console.log(JWT4.verify());

console.log("===============end===================")






const port = process.env.PORT || 3000;

app.use("/", authRouter);
app.use("/news", newsRouter);
app.use("/users", usersRouter);



app.listen(port, () => {
    console.log(`Сервер запустился на порту ${port}...`);
});