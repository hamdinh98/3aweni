

const initialState = {
    isConnected: false,
    user: {},
    tokens: {},
    error: {}

}

export const LOGIN_ACTION = "LOGIN";
export const REGISTRATION_ACTION = "REGISTRATION";
export const ERROR = "ERROR"
export const SET_CONNECTED = "SET_CONNECTED"
export const LOGOUT = "LOGOUT"

export default function (state = initialState, action) {

    switch (action.type) {
        case REGISTRATION_ACTION:
            return {
                user: "signup with success"
            }
        case LOGIN_ACTION:
            return {
                isConnected: true,
                tokens: action.payload,
                user: action.user
            }
        case ERROR:
            return {
                error: action.payload
            }
        case SET_CONNECTED:
            return {
                ...state,
                isConnected: true
            }
        case LOGOUT:
            return {
                isConnected: false
            }



        default:
            return state
    }

}