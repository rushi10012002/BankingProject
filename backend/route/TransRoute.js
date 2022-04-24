const exprees=require('express');
const { TransferData, GetDataTransuctionHistory, TransferAllData } = require('../controller/TransFerController');
const router=exprees.Router()

router.post('/tranfer',TransferData)
router.get('/all/data',TransferAllData)
router.post('/transaction/history',GetDataTransuctionHistory)
module.exports=router;