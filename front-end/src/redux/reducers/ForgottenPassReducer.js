

const initialState = {
    success: {},
    error: {}
}

export const SEND_VERIF_CODE = "SEND_VERIF_CODE";
export const VERIFCATE_CODE = "VERIFCATE_CODE"
export const ERROR = "ERROR"
export const UPDATE_PASSWORD = "UPDATE_PASSWORD"

export default function (state = initialState, action) {

    switch (action.type) {
        case SEND_VERIF_CODE:
            return {
                success: action.payload
            }
        case UPDATE_PASSWORD:
            return {
                success: action.payload
            }
        case VERIFCATE_CODE:
            return {
                success: action.payload
            }
        case ERROR:
            return {
                error: action.payload
            }
        default:
            return state
    }

}