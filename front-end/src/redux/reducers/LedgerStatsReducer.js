

const initialState={
    backers:{},
    project:{},
}

export const USERS_RETRIEVED ="USERS";
export const PROJECT_RETRIEVED ="PROJECT";

export default function (state = initialState,action){
    switch (action.type)
    {
        case USERS_RETRIEVED:
        {
            return {
                ...state,
                backers:action.payload
            }
        }
        case PROJECT_RETRIEVED:
        {
            return {
                ...state,
                project:action.payload
            }
        }

        default:
            return state;

    }
}