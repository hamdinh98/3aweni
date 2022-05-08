
const initialState={
    income:{},
    expense:{},
    project: {},
    //error:{}
}

export const INCOME_ADDED = "INCOME";
export const EXPENSE_ADDED = "EXPENSE";
export const PROJECT_RETRIEVED = "PROJECT";
export const ERROR = "ERROR"

export default function(state = initialState, action){

    switch (action.type) {
        case INCOME_ADDED:
            return {
                income: "income added with success"
            }

        case EXPENSE_ADDED:
            return {
                expense: "expense added with success"
            }

        case PROJECT_RETRIEVED:
            return {
                ...state,
                project:action.payload
            }

        case ERROR:
            return {
                error: action.payload
            }
        default:
            return state
    }
}