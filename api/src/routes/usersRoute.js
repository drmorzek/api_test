const mainroute = require("./mainRoute");

const usersController = require("../controllers/usersController");

const usersRouter = mainroute.express.Router();

usersRouter.get("/all", usersController.getAll);
usersRouter.get("/:id", usersController.getOne);
usersRouter.put("/:id", usersController.replace);
usersRouter.post("/add", usersController.add);
usersRouter.delete("/:id", usersController.delete);

module.exports = usersRouter;