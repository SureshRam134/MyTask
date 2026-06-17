import { response } from "../utils/response.js";



export const registerValidstioin = async (req, res, next) => {

    try {
        const { name, email, password } = req.body;
        if (!name) return response(res, 400, "Please enter name")
        if (!email) return response(res, 400, "Please enter email")
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) return response(res, 400, "Please vaild email")
        if (!password) return response(res, 400, "Please enter password")
        next()
    
    } catch (error) {
        return response(res, 501, "Internal server error", error.message)
    }
}