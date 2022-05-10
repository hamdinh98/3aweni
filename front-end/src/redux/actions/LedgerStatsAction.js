import axios from "axios"

import {USERS_RETRIEVED,PROJECT_RETRIEVED} from "../reducers/LedgerStatsReducer"

export const getBackers=()=>dispatch=>{
    axios.get('https://aweni1-2022.herokuapp.com/getListOfBackers/624c1b4eb8de704cf4415662')
        .then(result=>{
            console.log(result.data[0].Backer.name)
            for(let i=0 ;i<result.data.length;i++) {
                result.data[i].id = result.data[i]._id
            }
            dispatch({
                type:USERS_RETRIEVED,
                payload:result.data
            })

        })
}

export const getProject=()=>dispatch=>{
    axios.get('https://aweni1-2022.herokuapp.com/project/62688da746a6fe1af8bcf0e0')
        .then(result=>{
            dispatch({
                type:PROJECT_RETRIEVED,
                payload:result.data
            })
        })
}

