const mainroute = require("./mainRoute");
const upload = require('../config/multer_config');
const usersController = require("../controllers/usersController");

const usersRouter = mainroute.express.Router();

usersRouter.get("/all", upload.any("formdata"), usersController.getAll);
usersRouter.get("/:id", upload.any("formdata"), usersController.getOne);
usersRouter.put("/:id", upload.any("formdata"), usersController.replace);
usersRouter.post("/add", upload.any("formdata"), usersController.add);
usersRouter.delete("/:id", upload.any("formdata"), usersController.delete);

module.exports = usersRouter;