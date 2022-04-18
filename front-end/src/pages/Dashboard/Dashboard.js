import React from "react";
import Topbar from "../../parts/Dashboard/Topbar/Topbar";
import Sidebar from "../../parts/Dashboard/Sidebar/Sidebar";
import "./Dashboard.css"
import DashboardHome from "../../parts/Dashboard/DashboardHome/DashboardHome";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import DashboardUsers from "../../parts/Dashboard/DashboardUsers/DashboardUsers";

const Dashboard=()=>
{
    return (
        /*change this div to router for routing*/
        <div>

            <Topbar/>
            {/*DO NOT CHANGE THE CLASSNAME TO CONTAINER!!!
            container is a bootstrap reserved name, and it will ruin the current style*/}
            <div className="contain">
                <Sidebar/>
                <DashboardHome/>
                {/*
                <Routes>
                    <Route path="/Dashboard" element={<DashboardHome/>}/>
                    <Route path="/Dashboard/Users" element={<DashboardUsers/>}/>
                </Routes>
                */}
            </div>

        </div>

    )
}

export default Dashboard;