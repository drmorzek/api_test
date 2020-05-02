const app = require("./routes/mainRoute").app;
const newsRouter = require("./routes/newsRoute");
const usersRouter = require("./routes/usersRoute");

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello API');
});

app.use("/news", newsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
    console.log(`Сервер запустился на порту ${port}...`);
});