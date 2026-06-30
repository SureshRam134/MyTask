import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import userDataStore from './modules/seeders.js';
import userRoute from './routes.js/userRoutes.js';
import course_route from './routes.js/courseRoute.js';
import employee_route from './routes.js/exployeesRoute.js';
import dataProcessRoute from './routes.js/dataProcessRoute.js';
import insertRoute from './routes.js/insertRoute.js';



dotenv.config()
const server = express();
const PORT  = process.env.PORT
server.use(express.json())
const allow = {
    origin:'http://localhost:5173',
    methods:["GET", "POST", "PUT", "DELETE"]
}
server.use(cors(allow))
server.use('/api/user', userRoute)
server.use('/api/course', course_route)
server.use('/api/employee', employee_route)
server.use('/api/data', dataProcessRoute)
server.use('/api/insert-user', insertRoute)


connectDB().then(async() => {await userDataStore() })
server.listen(PORT,() => {
    console.log(`server connected ${PORT} Port`);
    
})

