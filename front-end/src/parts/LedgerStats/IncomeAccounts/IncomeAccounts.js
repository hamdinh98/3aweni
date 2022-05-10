import "./IncomeAccounts.css"
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {getProject} from "../../../redux/actions/LedgerStatsAction";


export default function IncomeAccounts()
{

    const dispatch = useDispatch();
    const project = useSelector(state=>state.LedgerStats)
    useEffect(()=>{
        dispatch(getProject())

    },[])


    if(project.project.incomes !=undefined){
        var  incomes =  project.project?.incomes.map(el=>{
            return <tr className="WidgetLgTr">


                <td className="WidgetLgProject">{el.source}</td>

                <td className="WidgetLgAmount">{el.incomeAmount}</td>

                <td className="WidgetLgDate">{el.date.split('T')[0]}</td>

            </tr>

        })

    }


    const Button = ({type}) =>{
        return <button className={"WidgetLgButton " + type}>{type}</button>
    }
    return (

        <div className="WidgetLgAccounts">
            <span className="WidgetLgTitle">Incomes Accounts</span>
            <table className="WidgetLgTable">
                <thead>
                <tr className="WidgetLgTr">

                    <th className="WidgetLgTh">Type</th>
                    <th className="WidgetLgTh">Amount</th>
                    <th className="WidgetLgTh">Date</th>

                </tr>
                </thead>

                <tbody>

                {incomes}

                </tbody>
            </table>
        </div>
    )
}