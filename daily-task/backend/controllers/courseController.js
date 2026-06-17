import { response } from "../utils/response.js";


export const courseFunction = async (req, res) => {

    try {
        const { course, seat, fees, trainer } = req.body;
        if (!course || !seat || !fees || !trainer) {
            console.log("Enter All Fields");
            return response(res, 400, "Enter All Fields")
        } else {
            const data = {
                course: course,
                seat: seat,
                fees: fees,
                trainer: trainer,
            }
            console.log(data);
            return response(res, 200, "all data getted", data)
        }
    } catch (error) {
        console.log(error.message);
        
        response(res, 501, "internal server error")
    }
}