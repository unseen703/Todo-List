import  express  from "express";
const userRouter = express.Router();
import UserauthController from "../controllers/UserauthController.js"
const userauthController = new UserauthController()
// User sign up and sign in route
// access public
userRouter.get("/", userauthController.main)
userRouter.post("/signup", userauthController.signup)
userRouter.post("/login", userauthController.login)
userRouter.post("/logout", userauthController.logout)

export default userRouter;