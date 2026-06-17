
import { Router} from "express";
import { getUserdata, registerFunction } from "../controllers/userController.js";
import { registerValidstioin } from "../middleware/registerMiddleware.js";

const userRoute = Router()
    userRoute.post('/register', registerValidstioin, registerFunction )
    userRoute.get('/get-user', getUserdata)

export default userRoute;