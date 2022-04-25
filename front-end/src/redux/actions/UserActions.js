import axiosInstance from "../../utils/axiosInterceptor"
import { TOTAL_MONEY_DONATED, ERROR } from '../reducers/UserReducer'

export const TotalMoneyDonated = () => dispatch => {
    axiosInstance.get("/totalMoneyBacked")
        .then(result => {
            // console.log(result.data);
            dispatch({
                type: TOTAL_MONEY_DONATED,
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