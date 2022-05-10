import "./OverviewLedger.css"
import React, {useEffect} from "react";

import { useDispatch, useSelector } from 'react-redux'
import {GetProject} from "../../redux/actions/LedgerAction";


const OverviewLedger =() =>{

    const dispatch = useDispatch();
    const project = useSelector(state=>state.Ledger)
    useEffect(()=>{
      dispatch(GetProject())
        console.log("test overview ledger")
       // console.log(project.project.totalExpenses)
    },[])

    const total = project.project?.totalIncomes - project.project?.totalExpenses;



    return(
        <div>
            <div className="OverviewLedgerComponentExample">
                <div className="DashboardOverviewLedgerWrapper">
                    <div className="DashboardOverviewLedgerItem">
                        <span className="ItemTitle">Total Incomes</span>

                        <div className="itemsContainer">
                            <span className="UserNumber">{project.project?.totalIncomes} TND</span>

                        </div>

                    </div>
                </div>

                <div className="DashboardOverviewLedgerWrapper">
                    <div className="DashboardOverviewLedgerItem">
                        <span className="ItemTitle">Total Expenses</span>

                        <div className="itemsContainer">
                            <span className="UserNumber">{project.project?.totalExpenses} TND</span>

                        </div>

                    </div>
                </div>

                <div className="DashboardOverviewLedgerWrapper">
                    <div className="DashboardOverviewLedgerItem">
                        <span className="ItemTitle">Balance</span>

                        <div className="itemsContainer">
                            <span className="UserNumber" style={{"color":"Green"}}>{total} TND</span>

                        </div>

                    </div>
                </div>

            </div>




        </div>
    )
}

export default OverviewLedger;