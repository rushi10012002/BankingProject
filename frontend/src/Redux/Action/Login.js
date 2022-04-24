import axios from 'axios'
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE, SINGLE_USERS_REQUEST, SINGLE_USERS_SUCCESS, SINGLE_USERS_FAILURE} from '../Constant/Login'
export const ActionForLoginUser=(object)=>async(dispatch,getState)=>{
    try {
        dispatch({type:LOGIN_REQUEST})
   
        const {data}=await axios.post('/login',object)
        console.log(data.data);
        dispatch({type:LOGIN_SUCCESS,payload:data.data})
        localStorage.setItem('userInfo',JSON.stringify(getState().LoginData.user))
    } catch (error) {
        dispatch({type:LOGIN_FAILURE,payload:error})
        
    }

}
export const ActionForSingleUser=(id)=>async(dispatch)=>{
    try {
        dispatch({type:SINGLE_USERS_REQUEST})
   
        const {data}=await axios.get(`/data/get/${id}`)
        console.log(data.data);
        dispatch({type:SINGLE_USERS_SUCCESS,payload:data.data})
        
    } catch (error) {
        dispatch({type:SINGLE_USERS_FAILURE,payload:error})
        
    }

}
export const ActionForLogout=()=>async(dispatch)=>{
    try {
        dispatch({type:LOGOUT_SUCCESS,payload:{}})
        localStorage.removeItem('userInfo')
    } catch (error) {
        dispatch({type:LOGOUT_FAILURE,payload:error})
        
    }

}