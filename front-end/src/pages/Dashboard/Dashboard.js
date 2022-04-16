import React from "react";
import Topbar from "../../parts/Dashboard/Topbar/Topbar";
import Sidebar from "../../parts/Dashboard/Sidebar/Sidebar";
import "./Dashboard.css"


const Dashboard=()=>
{
    return (
        <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>

            </div>

        </div>

    )
}

export default Dashboard;