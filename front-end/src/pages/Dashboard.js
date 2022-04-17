import React from "react";
import _nav from '../components/SideBar/_nav'
import { AppSidebarNav } from "../parts/Dashboard/AppSidebarNav";

const Dashboard = () => {
    return (
        <AppSidebarNav items={_nav} />
    )
}


export default Dashboard