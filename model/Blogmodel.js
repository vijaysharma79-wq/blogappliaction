const { default: mongoose } = require("mongoose");


const blogSchema = new mongoose.Schema({
  id:{type:Number,require:true},
  title:{type:String,require:true},
  description:{type:String,require:true},
  likes:{type:Number,default:0},
  blogpic:{type:String},
  isActive:{type:Boolean,default:true},
userId:{type:mongoose.Types.ObjectId,
ref:"loginModal"}
})
blogSchema.set("timestamps",true)

const blogModal = new mongoose.model("blogs", blogSchema)



module.exports = { blogModal }