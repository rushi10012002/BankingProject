import {TRANS_REQUEST_DATA,TRANS_SUCCESS_DATA,TRANS_ERROR_DATA, TRANS_ALL_REQUEST_DATA, TRANS_ALL_SUCCESS_DATA, TRANS_ALL_ERROR_DATA} from '../Constant/TransMoney'
export const ReducerTransHistory=(state={TransData:[]},action)=>{
    switch (action.type) {
        case TRANS_REQUEST_DATA:
           return {TransData:null}
        case TRANS_SUCCESS_DATA:
           return {TransData:action.payload}
        case TRANS_ERROR_DATA:
           return {TransData:action.payload}
    
        default:
            return state;
    }
}
export const ReducerAllTransHistory=(state={TransDataAll:[]},action)=>{
    switch (action.type) {
        case TRANS_ALL_REQUEST_DATA:
           return {TransDataAll:null}
        case TRANS_ALL_SUCCESS_DATA:
           return {TransDataAll:action.payload}
        case TRANS_ALL_ERROR_DATA:
           return {TransDataAll:action.payload}
    
        default:
            return state;
    }
}
export const ReducerTransfer=(state={TransferData:{}},action)=>{
    switch (action.type) {
        case TRANS_ALL_REQUEST_DATA:
           return {TransferData:{}}
        case TRANS_ALL_SUCCESS_DATA:
           return {TransferData:action.payload}
        case TRANS_ALL_ERROR_DATA:
           return {TransferData:action.payload}
    
        default:
            return state;
    }
}