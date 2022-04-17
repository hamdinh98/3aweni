import React from "react";
import "./Sidebar.css";
import {Home, Timeline, Person, Store} from '@mui/icons-material';
export default function Sidebar()
{
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                {/*if you want to add another menu (with title and items),
                 copy the block below named sidebarMenu*/}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <Home className="sidebarIcon"/> Home
                        </li>
                        <li className="sidebarItem">
                          <Timeline className="sidebarIcon"/> Statistics
                        </li>
                        <li className="sidebarItem">
                            <Person className="sidebarIcon"/> Users
                        </li>
                        <li className="sidebarItem">
                            <Store className="sidebarIcon"/> Projects
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
