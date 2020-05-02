const app = require("./routes/mainRoute").app;


const newsRouter = require("./routes/newsRoute");
const usersRouter = require("./routes/usersRoute");
const authRouter = require("./routes/authRoute");

const port = process.env.PORT || 3000;

app.use("/", authRouter);
app.use("/news", newsRouter);
app.use("/users", usersRouter);



app.listen(port, () => {
    console.log(`Сервер запустился на порту ${port}...`);
});