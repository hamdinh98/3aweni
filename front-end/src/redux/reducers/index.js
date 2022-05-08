import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
//import UserReducer from "./UserReducer";
import LedgerReducer from "./LedgerReducer";
import forgotPasswordReducer from "./ForgottenPassReducer";
import LedgerStatsReducer from "./LedgerStatsReducer";
export default combineReducers({

    Auth: AuthReducer,
    //User: UserReducer,
    Ledger: LedgerReducer,
    LedgerStats : LedgerStatsReducer,
    ForgotPassword: forgotPasswordReducer

})