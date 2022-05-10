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



                    <Link to="/">
                        <img className="topbarImage" src="/assets/img/logo/3aweni.png" alt=""/>
                    </Link>
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
                        {/*change this one to dynamic user profile picture*/}
                        <img className="topbarImage" src="/assets/img/logo/3aweni.png" alt=""/>
                    </div>

                </div>


            </div>

        </div>
    )
}