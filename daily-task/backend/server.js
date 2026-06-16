import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import userDataStore from './modules/seeders.js';
import userRoute from './routes.js/userRoutes.js';



dotenv.config()
const server = express();
const PORT  = process.env.PORT
server.use(express.json())
const allow = {
    origin:'http://localhost:5173',
    methods:["GET", "POST", "PUT", "DELETE"]
}
server.use(cors(allow))
server.use('/api', userRoute)

connectDB().then(async() => {await userDataStore() })
server.listen(PORT,() => {
    console.log(`server connected ${PORT} Port`);
    
})

