import React from "react";
import "./Sidebar.css";
import {Home, Timeline, Person, Store} from '@mui/icons-material';
export default function Sidebar()
{
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <Home/> Home
                        </li>
                        <li className="sidebarItem">
                          <Timeline/> Statistics
                        </li>
                        <li className="sidebarItem">
                            <Person/> Users
                        </li>
                        <li className="sidebarItem">
                            <Store/> Projects
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
