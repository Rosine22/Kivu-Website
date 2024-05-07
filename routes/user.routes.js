import userController from "../controllers/user.controller.js";
//import userMiddleware from "../Middlewares/user.middleware.js"
import { Router } from "express";
const routes = Router();

routes.post("/create",userController.signup);
routes.post("/login", userController.login);
routes.post("/verify",userController.ValidateOpt)
routes.get("/list/:id", userController.listByid);
routes.delete("/delete/:id", userController.Deleting);
routes.put("/update/:id", userController.updating);

export default routes;