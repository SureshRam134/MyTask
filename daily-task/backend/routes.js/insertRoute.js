import { Router } from 'express'
import { addUserData } from '../controllers/insertController.js';

export {Router} from 'express'

const insertRoute = Router()
    insertRoute.post('/insert', addUserData)

export default insertRoute;