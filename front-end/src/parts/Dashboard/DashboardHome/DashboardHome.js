import React from "react";
import "./DashboardHome.css"
import HomeComponentExample from "../../../components/DashboardComponents/DashboardHomeComponents/HomeComponentExample";

export default function DashboardHome()
{
    return (
        /*this is temporary, used to understand how to devide, later use components here*/
        /*icons from https://mui.com/material-ui/material-icons/   */
        /*charts from https://recharts.org/en-US/   */
        /*tables from https://mui.com/material-ui/react-table/#data-table  */
        /*color picker https://imagecolorpicker.com/en  */
        <div className="DashboardHome">
        <HomeComponentExample/>
        </div>
    )
}