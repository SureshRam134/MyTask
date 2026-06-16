import { response } from "../utils/response.js";
import { userModule } from "./userModule.js";


const userDataStore = async() => {
    const user = {
        name:"admin",
        age:20,
        address:"perungudi"
    }
    try {
        const exitData = await userModule.findOne({name:"admin"})
        if(exitData) {
            return console.log("this User already exists");
        }

        await userModule. create(user)
        return console.log("Userdata successfully created");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default userDataStore;