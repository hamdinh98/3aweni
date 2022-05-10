import axios from "axios"
import { SEND_VERIF_CODE, ERROR, UPDATE_PASSWORD, VERIFCATE_CODE } from '../reducers/ForgottenPassReducer'


export const sendVerifCode = (email) => dispatch => {
    axios.post('https://aweni1-2022.herokuapp.com/sendVerifCode', { email: email })
        .then(result => {
            //console.log("result: " + result);
            dispatch({
                type: SEND_VERIF_CODE,
                payload: result
            })
        })
        .catch(err => {
            //console.log("error : " + err);
            dispatch({
                type: ERROR,
                payload: err.response.data
            })
        })
}

export const verifCode = (code) => dispatch => {
    axios.post('https://aweni1-2022.herokuapp.com/verifCode', { code: code })
        .then(result => {
            dispatch({
                type: VERIFCATE_CODE,
                payload: result.data
            })

        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err.data
            })
        })
}


export const updatePassword = (password) => dispatch => {
    axios.post('https://aweni1-2022.herokuapp.com/updatePassword', { password: password })
        .then(result => {
            dispatch({
                type: UPDATE_PASSWORD,
                payload: result.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err.data
            })
        })

}