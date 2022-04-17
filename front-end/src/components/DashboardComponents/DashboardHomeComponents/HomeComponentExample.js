import React from "react";
import "./HomeComponentExample.css"
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";

export default function HomeComponentExample()
{
    return(
        <div className="HomeComponentExample">
            <div className="DashboardHomeWrapper">
                <div className="DashboardHomeItem">
                    <span className="ItemTitle">users number</span>

                    <div className="itemsContainer">
                        <span className="UserNumber">1546 users</span>
                        <span className="UserTrend">126 <ArrowUpward className="ArrowIcon"/></span>
                    </div>

                </div>
            </div>

            <div className="DashboardHomeWrapper">
                <div className="DashboardHomeItem">
                    <span className="ItemTitle">users number</span>

                    <div className="itemsContainer">
                        <span className="UserNumber">1546 users</span>
                        <span className="UserTrend">126 <ArrowDownward className="ArrowIcon"/></span>
                    </div>

                </div>
            </div>

            <div className="DashboardHomeWrapper">
                <div className="DashboardHomeItem">
                    <span className="ItemTitle">users number</span>

                    <div className="itemsContainer">
                        <span className="UserNumber">1546 users</span>
                        <span className="UserTrend">126 <ArrowUpward className="ArrowIcon negative"/></span>
                    </div>

                </div>
            </div>

        </div>
    )

}