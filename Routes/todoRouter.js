import  express  from "express";
const todoRouter = express.Router();
import MainController from "../controllers/MainController.js"
const mainController = new MainController()

//TODO list routes
// access Private

todoRouter.route('/todo').get( mainController.index).post( mainController.create);
todoRouter.get("/todo/new", mainController.new);
todoRouter.put("/todo/complete/:id", mainController.complete);
todoRouter.delete("/todo/:id", mainController.destroy);
export default todoRouter;



