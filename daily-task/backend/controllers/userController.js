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