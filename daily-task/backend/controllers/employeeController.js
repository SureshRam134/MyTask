import { response } from "../utils/response.js";


export const employeeFunction = async (req, res) => {

    try {
        const { name, department, salary } = req.body;
        if (!name || !department || !salary) {
            console.log("Enter All Fields");
            return response(res, 400, "Enter All Fields")
        } else {
            const data = {
                name: name,
                department: department,
                salary: salary,
            }
            console.log(data);
            return response(res, 200, "all data getted", data)
        }
    } catch (error) {
        console.log(error.message);

        response(res, 501, "internal server error")
    }
}