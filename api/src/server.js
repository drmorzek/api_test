const express = require("express");
const bodyparser = require("body-parser");

const newsController = require("./controllers/newsController");
const usersController = require("./controllers/usersController");


const app = express();
const port = process.env.PORT || 3000;




app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use((error, req, res, next) => {  
  console.error(error);
  res.status(500).send({
    message: "Что-то пошло не так",
    type: String(error.type),
    error: String(error.message),
  });
});

app.get('/', (req, res) => {
    res.send('Hello API');
});

app.get("/news/all", newsController.getAll);
app.get("/news/:id", newsController.getOne);
app.put("/news/:id", newsController.replace);
app.post("/news/add", newsController.add);
app.delete("/news/:id", newsController.delete);

app.get("/users/all", usersController.getAll);
app.get("/users/:id", usersController.getOne);
app.put("/users/:id", usersController.replace);
app.post("/users/add", usersController.add);
app.delete("/users/:id", usersController.delete);

app.listen(port, () => {
    console.log(`Сервер запустился на порту ${port}...`);
});