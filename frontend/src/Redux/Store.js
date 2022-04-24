import { createStore, applyMiddleware ,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { ReducerLoginData } from './Reducer/LoginReducer'
import { ReducerAllTransHistory, ReducerTransfer, ReducerTransHistory } from './Reducer/TransReducer'
import { ReducerSingleUserData, ReducerUserAllData } from './Reducer/AllUsersReducer'

const rootReducer=combineReducers({
    LoginData:ReducerLoginData,
    TransuctionHistory:ReducerTransHistory,
    allHistory:ReducerAllTransHistory,
    AllUser:ReducerUserAllData,
    SingleUser:ReducerSingleUserData,
    TransferMoney:ReducerTransfer
})
const initialState={
    LoginData:{
        user:localStorage.getItem('userInfo') ?JSON.parse(localStorage.getItem('userInfo')):null
    }
}
const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(thunk)))
export default store