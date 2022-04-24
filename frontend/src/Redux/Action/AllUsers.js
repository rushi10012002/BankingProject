import axios from "axios";
import { ALL_USERS_FAILURE, ALL_USERS_REQUEST, ALL_USERS_SUCCESS } from "../Constant/Login";

export const ActionForUser=(object)=>async(dispatch)=>{
    try {
        dispatch({type:ALL_USERS_REQUEST})
   
        const {data}=await axios.get('/all/data/users')
        console.log(data.data);
        dispatch({type:ALL_USERS_SUCCESS,payload:data.data})
         
    } catch (error) {
        dispatch({type:ALL_USERS_FAILURE,payload:error})
        
    }

}