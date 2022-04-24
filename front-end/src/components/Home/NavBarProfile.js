
import React from "react";
import { logout } from "../../redux/actions/AuthActions";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
const NavBarProfile = () => {
    const dispatch = useDispatch()
    const datauser = JSON.parse(localStorage.getItem('user'))
    const logoutHandler = () => {
        dispatch(logout())
        !localStorage.getItem('authTokens') && Navigate('/')
    }
    return (
        <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
            <a class="navbar-brand" href="#">
                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png" width="30" height="30" alt="logo" />
                {datauser.name || "not found"}
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-list-4">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={`../${datauser.img}`} />
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Profile</a>
                            <a class="dropdown-item" onClick={logoutHandler}>Log Out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBarProfile