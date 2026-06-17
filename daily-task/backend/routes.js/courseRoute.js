
import {Router} from 'express'
import { courseFunction } from '../controllers/courseController.js';



const course_route = Router()
course_route.post ('/show' , courseFunction)

export default course_route;