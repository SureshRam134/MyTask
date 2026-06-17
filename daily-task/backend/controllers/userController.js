import { userModule } from "../modules/userModule.js"
import { response } from "../utils/response.js"



export const  getUserdata = async (req, res) => {
    try {
        
        const getData = await userModule.find()
        console.log(getData);
        return response(res, 200, "successfully get data", getData) 

    } catch (error) {
        return response(res, 501, "internal server error", error.message) 
    }
}


export const registerFunction = async (req, res) => {

    try {
        response(res, 200, "User SuccessFully Register")
    } catch (error) {
        console.log(error.messages);
        
         response(res, 501, "Internal server errer", error.message)
    }
} 