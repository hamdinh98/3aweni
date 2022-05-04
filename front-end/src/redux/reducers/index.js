import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
//import UserReducer from "./UserReducer";
import LedgerReducer from "./LedgerReducer";
import forgotPasswordReducer from "./ForgottenPassReducer";
export default combineReducers({

    Auth: AuthReducer,
    //User: UserReducer,
    Ledger: LedgerReducer,
    ForgotPassword: forgotPasswordReducer

})