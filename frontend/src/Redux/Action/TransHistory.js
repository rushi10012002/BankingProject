import axios from 'axios'
import {TRANS_REQUEST_DATA,TRANS_SUCCESS_DATA,TRANS_ERROR_DATA, TRANS_ALL_REQUEST_DATA, TRANS_ALL_SUCCESS_DATA, TRANS_ALL_ERROR_DATA, TRANSFER_REQUEST_DATA, TRANSFER_SUCCESS_DATA, TRANSFER_ERROR_DATA} from '../Constant/TransMoney'

export const ActionForTransHistory=(object)=>async(dispatch)=>{
    try {
        dispatch({type:TRANS_REQUEST_DATA})
      
        const {data}=await axios.post('/transaction/history',object)
        // console.log("--------------"+data.data);
        dispatch({type:TRANS_SUCCESS_DATA,payload:[...data.data]})
        // console.warn(data.data);
        
    } catch (error) {
        dispatch({type:TRANS_ERROR_DATA,payload:error})
        
    }

}
export const ActionForTransHistoryAll=()=>async(dispatch)=>{
    try {
        dispatch({type:TRANS_ALL_REQUEST_DATA})
      
        const {data}=await axios.get('/all/data')
        // console.log("--------------"+data.data);
        dispatch({type:TRANS_ALL_SUCCESS_DATA,payload:[...data.data]})
        // console.warn(data.data);
        
    } catch (error) {
        dispatch({type:TRANS_ALL_ERROR_DATA,payload:error})
        
    }

}
export const ActionForTransfer=(object,UpObject,ReciverObject)=>async(dispatch,getState)=>{
    try {
        console.log("------------------------ start");
        const{amount,ReciverAccountNumber}=ReciverObject
        dispatch({type:TRANSFER_REQUEST_DATA})
        //   console.log(object,UpObject);
        console.log(ReciverObject);
        const result = await axios.post('/tranfer', object)
        const result1= await axios.post('/balance/Update', UpObject)
        // console.log(data.data);
        const {data} = await axios.post('/data/get/Byid', {id:ReciverAccountNumber})
        const {_id,Balance}=data.data
        const AllUp= +Balance+ +amount
        console.log(AllUp);
        const xx={id:_id,Balance: AllUp }
        const result3 = await axios.post('/balance/Update', xx)
        
        dispatch({type:TRANSFER_SUCCESS_DATA,payload:{success:true,message:"Transfer Successfully"}})
        console.log("------------------------ end");
        // console.warn(data.data);
        const obj=getState().LoginData.user
        localStorage.setItem('userInfo',JSON.stringify({...obj,Balance:UpObject.Balance})) 
    } catch (error) {
        dispatch({type:TRANSFER_ERROR_DATA,payload:{success:true,message:error}})
        
    }

}