import { ALL_USERS_FAILURE, ALL_USERS_REQUEST, ALL_USERS_SUCCESS, SINGLE_USERS_FAILURE, SINGLE_USERS_REQUEST, SINGLE_USERS_SUCCESS } from "../Constant/Login";

export const ReducerUserAllData = (state = { AllUsersDatas: [] }, action) => {
    switch (action.type) {
        case ALL_USERS_REQUEST:
        
        case ALL_USERS_SUCCESS:
            return { AllUsersDatas: action.payload }
        case ALL_USERS_FAILURE:
            return { AllUsersDatas: action.payload }
        
        default:
            return state;
    }
}
export const ReducerSingleUserData = (state = { SingleData:{}}, action) => {
    switch (action.type) {
        case SINGLE_USERS_REQUEST:
        
        case SINGLE_USERS_SUCCESS:
            return { SingleData: action.payload }
        case SINGLE_USERS_FAILURE:
            return { SingleData: action.payload }
        
        default:
            return state;
    }
}