import "./OverviewLedger.css"
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";
import React from "react";

const OverviewLedger =() =>{
    return(
        <div>
            <div className="OverviewLedgerComponentExample">
                <div className="DashboardOverviewLedgerWrapper">
                    <div className="DashboardOverviewLedgerItem">
                        <span className="ItemTitle">Total Incomes</span>

                        <div className="itemsContainer">
                            <span className="UserNumber">28.500 TND</span>
                            {/*<span className="UserTrend">126 <ArrowUpward className="ArrowIcon"/></span>*/}
                        </div>

                    </div>
                </div>

                <div className="DashboardOverviewLedgerWrapper">
                    <div className="DashboardOverviewLedgerItem">
                        <span className="ItemTitle">Total Expenses</span>

                        <div className="itemsContainer">
                            <span className="UserNumber">11,500 TND</span>
                            {/*<span className="UserTrend">126 <ArrowDownward className="ArrowIcon"/></span>*/}
                        </div>

                    </div>
                </div>

                <div className="DashboardOverviewLedgerWrapper">
                    <div className="DashboardOverviewLedgerItem">
                        <span className="ItemTitle">Balance</span>

                        <div className="itemsContainer">
                            <span className="UserNumber">17,000 TND</span>
                            {/*<span className="UserTrend">126 <ArrowUpward className="ArrowIcon negative"/></span>*/}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default OverviewLedger;