const mongoose=require('mongoose')
const TransData=mongoose.Schema({
    id:{type:mongoose.Types.ObjectId,required:false},
    amount:{type:Number,required:true},
    ReciverAccountNumber:{type:mongoose.Types.ObjectId,required:true},
    AcountType:{type:String,required:true},
})
module.exports=mongoose.model("Transuction",TransData)