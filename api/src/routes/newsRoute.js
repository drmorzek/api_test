const mainroute = require("./mainRoute");

const newsController = require("../controllers/newsController");

const newsRouter = mainroute.express.Router();

newsRouter.get("/all", newsController.getAll);
newsRouter.get("/:id", newsController.getOne);
newsRouter.put("/:id", newsController.replace);
newsRouter.post("/add", newsController.add);
newsRouter.delete("/:id", newsController.delete);

module.exports = newsRouter;