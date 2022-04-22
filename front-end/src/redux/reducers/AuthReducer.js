

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
        case LOGIN_ACTION:
            return {
                ...state,
                user: action.payload
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }


        default:
            return state
    }

}