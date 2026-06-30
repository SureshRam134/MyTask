import mongo from "mongoose"

const insertSchema = mongo.Schema({
    name:"String",
    age:"Number",
    address:"String"
})


const insertModel = mongo.model('insertUserData' , insertSchema)

export default insertModel