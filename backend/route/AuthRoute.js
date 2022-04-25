const express=require('express')
const { PostuserData, LoginUserData, BalanceUpdate, AllUserData, AllUserDataById, AllUserDataByIdget, UserDataByIdget, SearchAllUserData } = require('../controller/AuthController')
const router=express.Router()
const multer=require('multer')
const path=require('path')
const fs=require('fs')
 
const storage=multer.diskStorage({
    destination:function (req,file,cb) {
        if (!fs.existsSync("Upload")) {
            fs.mkdirSync("Upload")
        }
        if (!fs.existsSync("Upload/image")) {
            fs.mkdirSync("Upload/image")
        }
        cb(null,"Upload/image")
    },
    filename:function (req,file,cb) {
        cb(null,Date.now()+file.originalname)
    }
})
const Upload=multer({
    storage:storage
})
router.post('/add/user',Upload.fields([{
    name:"image",
    maxCount:1
}]),PostuserData)
// http://localhost:5000/add/user
router.post('/login',LoginUserData)
// http://localhost:5000/login
router.post('/balance/Update', BalanceUpdate)
router.get('/all/data/users',AllUserData)
router.post('/search/data',SearchAllUserData)
router.post('/data/users/:id',AllUserDataById)
router.get('/data/get/:id',AllUserDataByIdget)
router.post('/data/get/Byid',UserDataByIdget)

module.exports=router