import "./ExpensesAccounts.css";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {getProject} from "../../../redux/actions/LedgerStatsAction";


export default function ExpensesAccounts ()
{
    const dispatch = useDispatch();
    const project = useSelector(state=>state.LedgerStats)
    useEffect(()=>{
        dispatch(getProject())

    },[])

    console.log(project)
    if(project.project.expenses !=undefined){
        var  expenses =  project.project?.expenses.map(el=>{
            return <tr className="WidgetLgTr">


                <td className="WidgetLgProject">{el.purpose}</td>

                <td className="WidgetLgAmount">{el.expenseAmount}</td>

                <td className="WidgetLgDate">{el.date.split('T')[0]}</td>

            </tr>

        })

    }



    const Button = ({type}) =>{
        return <button className={"WidgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="WidgetLgExpenses">

            <span className="WidgetLgTitleExpenses">Expenses Accounts</span>
            <table className="WidgetLgTable">
                <thead>
                <tr className="WidgetLgTr">

                    <th className="WidgetLgTh">Purpose</th>
                    <th className="WidgetLgTh">Amount</th>
                    <th className="WidgetLgTh">Date</th>

                </tr>
                </thead>

                <tbody>


                {expenses}


                </tbody>
            </table>
        </div>
    )
}