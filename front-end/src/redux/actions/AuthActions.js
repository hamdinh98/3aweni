
import axios from "axios"
import { ERROR, LOGIN_ACTION, REGISTRATION_ACTION } from "../reducers/AuthReducer"
export const RegistrationAction = (user) => dispatch => {
    axios.post("http://localhost:5000/signIn", user, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(result => {
            // console.log(result.data);
            dispatch({
                type: REGISTRATION_ACTION,
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: ERROR,
                payload: err.response
            })
        })
}

export const LoginAction = (credentials) => dispatch => {
    axios.post('http://localhost:5000/login', credentials)
        .then(result => {
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
