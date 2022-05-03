

const initialState = {
    isConnected: false,
    user: {},
    tokens: {},
    error: {}

}

export const LOGIN_ACTION = "LOGIN";
export const GOOGLE_LOGIN = "GOOGLE_LOGIN";
export const REGISTRATION_ACTION = "REGISTRATION";
export const ERROR = "ERROR"
export const SET_CONNECTED = "SET_CONNECTED"
export const LOGOUT = "LOGOUT"
export const LOGIN_WITH_GOOGLE = "LOGIN_WITH_GOOGLE"

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
        case LOGIN_WITH_GOOGLE:
            return {
                isConnected: true,
                tokens: action.payload,
                user: action.user
            }




        default:
            return state
    }

}