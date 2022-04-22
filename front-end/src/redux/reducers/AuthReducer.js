

const initialState = {
    isConnected: false,
    user: {},
    error: {}

}

export const LOGIN_ACTION = "LOGIN";
export const REGISTRATION_ACTION = "REGISTRATION";
export const ERROR = "ERROR"

export default function (state = initialState, action) {

    switch (action.type) {
        case REGISTRATION_ACTION:
            return {
                user: "signup with success"
            }
        case LOGIN_ACTION:
            return {
                isConnected: true,
                user: action.payload,
            }
        case ERROR:
            return {
                error: action.payload
            }
        default:
            return state
    }

}