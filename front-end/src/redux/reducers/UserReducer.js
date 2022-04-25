

const initialState = {
    data: {},
    error: {}

}

export const TOTAL_MONEY_DONATED = "TOTAL_MONEY_DONATED";
export const ERROR = "ERROR"

export default function (state = initialState, action) {

    console.log(state.data);
    switch (action.type) {
        case TOTAL_MONEY_DONATED:
            return {
                ...state,
                data: action.payload
            }
        case ERROR:
            return {
                error: action.payload
            }
        default:
            return state
    }

}