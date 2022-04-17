import React from "react";
import Topbar from "../../parts/Dashboard/Topbar/Topbar";
import Sidebar from "../../parts/Dashboard/Sidebar/Sidebar";
import "./Dashboard.css"
import DashboardHome from "../../parts/Dashboard/DashboardHome/DashboardHome";


const Dashboard=()=>
{
    return (
        <div>
            <Topbar/>
            {/*DO NOT CHANGE THE CLASSNAME TO CONTAINER!!!
            container is a bootstrap reserved name, and it will ruin the current style*/}
            <div className="contain">
                <Sidebar/>

                {/*
                routes
                */}

                <DashboardHome/>
            </div>

        </div>

    )
}

export default Dashboard;