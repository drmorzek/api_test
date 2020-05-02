const app = require("./routes/mainRoute").app;

const port = process.env.PORT || 3000;


const newsRouter = require("./routes/newsRoute");
const usersRouter = require("./routes/usersRoute");



app.get('/', (req, res) => {
    res.send('Hello API');
});

app.use("/news", newsRouter);

app.use("/users", usersRouter);

app.listen(port, () => {
    console.log(`Сервер запустился на порту ${port}...`);
});