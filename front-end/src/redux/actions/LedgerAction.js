import axios from "axios"
import {INCOME_ADDED,EXPENSE_ADDED,ERROR,PROJECT_RETRIEVED} from "../reducers/LedgerReducer";

export const AddIncome = (income) => dispatch =>{
    axios.post("http://localhost:5000/addIncome/62688da746a6fe1af8bcf0e0", {income:income})
        .then(result =>{
            console.log(result.data)
            dispatch({
                type : INCOME_ADDED,
                payload:result.data
            })
        })
        .catch(err => {
            // console.log(err);
            dispatch({
                type: ERROR,
                payload: err.response
            })
        })
}


export const AddExpense = (expense) => dispatch=>{
    axios.post("http://localhost:5000/addExpense/62688da746a6fe1af8bcf0e0",{expense:expense})
        .then(result =>{
            //console.log(result.data)
            dispatch({
                type : EXPENSE_ADDED,
                payload:result.data
            })
        })
        .catch(err => {
             console.log(err);
            dispatch({
                type: ERROR,
                payload: err.response
            })
        })
}

export const GetProject =() => dispatch =>{
    axios.get('http://localhost:5000/projectTotals/62688da746a6fe1af8bcf0e0')
        .then(result=>{
            dispatch({
                type:PROJECT_RETRIEVED,
                payload: result.data
            })
        })
}