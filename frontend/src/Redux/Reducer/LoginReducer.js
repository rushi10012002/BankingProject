import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../Constant/Login'
export const ReducerLoginData = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        //    return {user:null}
        case LOGIN_SUCCESS:
            return { user: action.payload }
        case LOGIN_FAILURE:
            return { user: action.payload }
        case LOGOUT_SUCCESS:
            return { user: null }
        case LOGOUT_FAILURE:
            return { user: action.payload }

        default:
            return state;
    }
}