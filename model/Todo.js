import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    message:{
        type:String,
        trim:true,
        required : [true, 'Please add some text'],
        unique : true,
    },
    priority:{
        type:Number,
        required:[true, 'Please add a number']
    },
    completed:{
        type: Boolean,
        default :false,
    },
    createdat:{
        type:Date,
        default: Date.now
    },
    username: String
})
const Todo = mongoose.model("Todo", TodoSchema)
export default  Todo;



