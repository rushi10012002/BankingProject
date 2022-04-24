const transfer=require('../model/Transaction')
exports.TransferData=async(req,res,next)=>{
try {
    const result=await transfer.create(req.body)
    res.status(200).json({
        success:true,
        data:result,
        message:"Money transfer successfully"
    })
} catch (error) {
    next(error)
}
}
exports.TransferAllData=async(req,res,next)=>{
try {
    const result=await transfer.find()
    res.status(200).json({
        success:true,
        data:result,
        message:"all data successfully"
    })
} catch (error) {
    next(error)
}
}
exports.GetDataTransuctionHistory=async(req,res,next)=>{
try {
    const result=await transfer.find({id:req.body.id})
    res.status(200).json({
        success:true,
        data:result,
        message:"Get data successfully"
    })
} catch (error) {
    next(error)
}
}