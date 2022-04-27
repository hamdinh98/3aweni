import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import forgotPasswordReducer from "./ForgottenPassReducer";
export default combineReducers({

    Auth: AuthReducer,
    ForgotPassword: forgotPasswordReducer

})