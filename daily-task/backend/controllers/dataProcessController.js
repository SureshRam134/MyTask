import { response } from "../utils/response.js";


export const dataProcessBody = async (req, res) => {

    console.log(req.body);
    try {
        const { email, password } = req.body
        const data = {
            email, password
        }
        if (!email || !password) return response(res, 400, "please enter email or password")
        return response(res, 200, "response done", data)

    } catch (error) {
        console.log(error.message);

        return response(res, 501, "internal server error", error.message)
    }


}

export const dataProcessHeaders = async (req, res) => {


    try {

        const { authorization, token } = req.headers
        
        const data = {
            authorization,
            token,
        }
        if (!token) return response(res, 404, "token not found")
        return response(res, 200, "response done", data)
    } catch (error) {
        console.log(error.message);

        return response(res, 501, "internal server error", error.message)
    }


}


export const dataProcessParams = async (req, res) => {

    console.log(req.params.id);
    const { id } = req.params
    try {
        if (!id) return response(res, 404, "token not found")
        return response(res, 200, "response done", id)
    } catch (error) {
        console.log(error.message);

        return response(res, 501, "internal server error", error.message)
    }


}

export const dataProcessQuery = async (req, res) => {

    console.log(req.query);
    try {
        response(res, 200, "response done", req.query)
    } catch (error) {
        console.log(error.message);

        response(res, 501, "internal server error", error.message)
    }


}