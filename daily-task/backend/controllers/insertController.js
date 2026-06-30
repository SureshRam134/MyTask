import insertModel from "../modules/insertModule.js";
import { response } from "../utils/response.js";



export const addUserData = async(req, res) => {

    console.log(req.body);
    try {
        const {name, age, address} = req.body
        const data = {name, age, address}
        await insertModel.create(data)
        response(res, 201, "Add SuccessFully", data)
    } catch (error) {
        response(res, 500, "internal server error", error.message)
    }
}