const mongoose=require('mongoose')
const db=async()=>{
   await mongoose.connect(process.env.MONGO_URL)
   .then(()=>console.log("database connected"))
   .catch(()=>console.log("connection failed"))
}
module.exports=db;