import React from "react";
import "./Topbar.css"
import {Link} from "react-router-dom";
import {NotificationsNone, Settings} from '@mui/icons-material';
export default function Topbar()
{
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="logo">

                    <span className="placeholder"></span>

                    {/*<Link to="/Dashboard">
                        <img src="../../../../public/assets/img/logo/3aweni.png" alt=""/>
                    </Link>*/}
                </div>

                <div className="topRight">
                    <div className="TopbarNotification">
                        <NotificationsNone/>
                        <span className="notifBadge">3</span>
                    </div>

                    <div className="TopbarSettings">
                        <Settings/>
                    </div>

                    <div>
                        <span className="placeholder"></span>
                    </div>

                </div>


            </div>

        </div>
    )
}