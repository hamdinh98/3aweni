
import axios from "axios"
import { ERROR, LOGIN_ACTION } from "../reducers/AuthReducer"
export const RegistrationAction = (user) => dispatch => {
    axios.post("http://localhost:5000/signIn", user).then(result => {
        console.log(result.data);
        dispatch({
            type: LOGIN_ACTION,
            payload: result.data
        })
    })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err.response
            })
        })
}
