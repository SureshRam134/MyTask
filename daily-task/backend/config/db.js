import mongoo from "mongoose"


export const connectDB = async() => {
    try {
        await mongoo.connect(process.env.MONGO_DB)
        console.log("MongoDB Connected Successfully ");
        
    } catch (error) {
        console.log("MongoDB Connected Failed");
        console.log(error.message);
    }
}