
import {Router} from 'express'
import { employeeFunction } from '../controllers/employeeController.js';


const employee_route = Router()
employee_route.post('/show', employeeFunction)


export default employee_route;