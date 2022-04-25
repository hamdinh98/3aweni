
import axios from "axios"
import axiosInstance from "../../utils/axiosInterceptor"
import { ERROR, LOGIN_ACTION, REGISTRATION_ACTION, SET_CONNECTED, LOGOUT } from "../reducers/AuthReducer"
export const RegistrationAction = (user) => dispatch => {
    axios.post("http://localhost:5000/signIn", user, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(result => {
            dispatch({
                type: REGISTRATION_ACTION,
            })
        })
        .catch(err => {
            // console.log(err);
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
                payload: { accessToken: result.data.accessToken, refreshToken: result.data.refreshToken },
                user: result.data.user
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err.response
            })
        })
}


export const setConnected = () => dispatch => {
    dispatch({
        type: SET_CONNECTED
    })

}


export const logout = () => dispatch => {
    const authTokens = JSON.parse(localStorage.getItem('authTokens'))
    axiosInstance.delete("/logout", authTokens)
        .then(result => {
            dispatch({
                type: LOGOUT
            })
            localStorage.removeItem('authTokens')
            localStorage.removeItem('user')
        })
}
