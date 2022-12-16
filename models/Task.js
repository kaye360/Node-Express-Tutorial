import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type : String,
    required : [true, 'Must provide a name'],
    trim : true,
    maxLength : [20, 'Name cant be more than 20 characters'],
  },
  completed:{
    type : Boolean, 
    default : false,
  }
})



export const TaskModel = mongoose.model('Task', TaskSchema)