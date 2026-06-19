import { response } from "../utils/response.js";


export const dataProcessBody = async (req, res) => {

    console.log(req.body);
    try {
        const { name, age } = req.body
        const data = {
            name, age
        }
        if (!name || !age) return response(res, 400, "please enter name or age")
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

    const {name} = req.query
    try {
        if(!name) return response(res, 404, "name not found")
        response(res, 200, "response done", name)
    } catch (error) {
        console.log(error.message);

        response(res, 501, "internal server error", error.message)
    }


}

export const studentData = async (req, res) => {

    console.log(req.body);
    try {
        const { name, course, city } = req.body
        const data = {
            name, course, city 
        }
        if (!name || !course || !city) return response(res, 400, "please enter name or city or course")
        return response(res, 200, "response done", data)

    } catch (error) {
        console.log(error.message);

        return response(res, 501, "internal server error", error.message)
    }


}