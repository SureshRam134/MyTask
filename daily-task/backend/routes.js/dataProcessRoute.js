import {Router} from "express"
import { dataProcessBody, dataProcessHeaders, dataProcessParams, dataProcessQuery, studentData } from "../controllers/dataProcessController.js";

const dataProcessRoute = Router()

dataProcessRoute.post ('/body' , dataProcessBody)
dataProcessRoute.post ('/student' , studentData)
dataProcessRoute.get ('/headers' , dataProcessHeaders)
dataProcessRoute.get ('/params/:id' , dataProcessParams)
dataProcessRoute.get ('/query' , dataProcessQuery)

export  default dataProcessRoute;