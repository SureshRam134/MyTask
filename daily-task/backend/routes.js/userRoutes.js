
import { Router} from "express";
import { getUserdata } from "../controllers/userController.js";

const userRoute = Router()
    userRoute.get('/get-user', getUserdata)

export default userRoute;