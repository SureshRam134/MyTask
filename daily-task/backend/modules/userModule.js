import mongoo, { Types } from 'mongoose'


const userSchema = new mongoo.Schema({
    name :{
        type:"string",
        required :true,
        trim: true,
    },
    age : {
        type:'Number',
        required:true,
        trim: true,
    },
    address : {
        type:'String',
        required:true
    },
})

export const userModule = mongoo.model('userData', userSchema)