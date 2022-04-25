const user =require('../model/User') 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
exports.PostuserData = async (req, res) => {


    try {
        const PhotoPath=[]
        if (Array.isArray(req.files.image) && req.files.image.length>0) {
            req.files.image.map((item)=> PhotoPath.push(item.path))
         }
        const { password } = req.body
        const salt = await bcrypt.genSalt(12)
        const Npass = await bcrypt.hash(password, salt)
        const result = await user.create({
            ...req.body,
            image:PhotoPath,
            password:Npass,
            message:"Add client Data Successfully ..."
        })
        res.json({
            success: true,
           data:result
        })
    } catch (error) {
        res.json({
            success: false,
            data: error
        })
    }
}

exports.LoginUserData = async(req, res) => {


    try {
        
        const {email, password } = req.body
        const result = await user.findOne({email})
        if (!result) {
            res.status(401).json({
               data:{
                success: false,
                message:"Enter valid email Id"
               }
            })  
        }
        const match= await bcrypt.compare(password,result.password)
        if(!match) {
            res.json({
               data:{
                success: false,
                message:"Password do not match "
               }
            })  
        }
        const token=await jwt.sign({id:result._id},process.env.JWTPASSWORD)
        res.json({
            success: true,
           data:{
               id:result._id,
               IsAdmin:result.IsAdmin,
               name:result.name,
               phone:result.phone,
               image:result.image,
               email:result.email,
               status:result.status,
               address:result.address,
               Balance:result.Balance,
               token,
               success:true,
               message:"login successfully"
           },
          
        })
    } catch (error) {
        res.json({
           data:{
            success: false,
            message:"login unsuccessfully"
           }
        })
    }
}
exports.BalanceUpdate=async(req,res)=>{
try {
   
    console.log(req.body.id,req.body.Balance);
    const result=await user.findByIdAndUpdate(req.body.id,{Balance:req.body.Balance},{new:true}).select('Balance')
    res.json({
        success:true,
        data:result,
        message:"Balance Update Successfully"
    })
} catch (error) {
    res.json({
        success:false,
        // data:result,
        message:"Balance Update UnSuccessfully"
    })
}
}
exports.AllUserData=async(req,res)=>{
try {
   
     
    const result=await user.find().select('_id name email Address image')
    res.json({
        success:true,
        data:result,
        message:"get all users Successfully"
    })
} catch (error) {
    res.json({
        success:false,
        // data:result,
        message:"get all users unSuccessfully"
    })
}
}
exports.SearchAllUserData=async(req,res)=>{
try {
   
     const {input1}=req.body
    const result=await user.find({$or:[{_id:input1},{name:input1}]}).select('_id name email Address image')
    res.json({
        success:true,
        data:result,
        message:"get all search data Successfully"
    })
} catch (error) {
    res.json({
        success:false,
        // data:result,
        message:"get all search data unSuccessfully"
    })
}
}
exports.AllUserDataById=async(req,res)=>{
try {
   
     const {id}=req.params
     console.log(id);
     console.log(req.body);
    const result=await user.findByIdAndUpdate(id,req.body,{new:true}) 
    res.json({
        success:true,
        data:result,
        message:"update singel users Successfully"
    })
} catch (error) {
    res.json({
        success:false,
        // data:result,
        message:"update singel users unSuccessfully"
    })
}
}
exports.AllUserDataByIdget=async(req,res)=>{
try {
   
     const {id}=req.params
    const result=await user.findOne({_id:id}).select('_id name email Address image state Address phone city Balance')
    res.json({
        success:true,
        data:result,
        message:"get singel users Successfully"
    })
} catch (error) {
    res.json({
        success:false,
        data:result,
        message:"get singel users unSuccessfully"
    })
}
}
exports.UserDataByIdget=async(req,res)=>{
try {
   
      
    const result=await user.findOne({_id:req.body.id}).select('_id Balance')
    if (!result) {
        res.status(401).json({
           data:{
            success: false,
            message:"Enter valid Account Number"
           }
        })  
    }
            
    res.json({
        success:true,
        data:result,
        message:"get singel users By iD"
    })
} catch (error) {
    res.json({
        success:false,
        data:result,
        message:"UserDataByIdgets unSuccessfully"
    })
}
}