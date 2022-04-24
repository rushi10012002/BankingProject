const mongoose=require('mongoose')
const UserData=mongoose.Schema({
name:{type:String,required:false},
email:{type:String,required:false},
password:{type:String,required:false},
phone:{type:String,required:false},
image:[{type:String,required:false}],
state:{type:String,required:false},
city:{type:String,required:false},
IsAdmin:{type:Boolean,default:false},
Balance:{type:String,default:5000,required:false},
Address:{type:String,required:false},
},{timestamps:true})
module.exports=mongoose.model("userData",UserData)