
import axios from "axios"
import { ERROR, REGISTRATION_ACTION } from "../reducers/AuthReducer"
export const RegistrationAction = () => dispatch => {
    axios.post("http://localhost:5000/signIn", {
        data: {
            name: "hamdi nahdi",
            email: "aaa@gmail.com",
            password: "ttt",
            confirmPwd: "ttt",
            birthDate: "1998-02-24",
            country: "tunisia",
            state: "mmm",
        }
    }).then(result => {
        console.log(result);
        dispatch({
            type: REGISTRATION_ACTION,
            payload: result
        })
    })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
}