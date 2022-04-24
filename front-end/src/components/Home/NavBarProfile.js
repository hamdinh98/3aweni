
import React from "react";
import { logout } from "../../redux/actions/AuthActions";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
const NavBarProfile = () => {
    const dispatch = useDispatch()
    const datauser = JSON.parse(localStorage.getItem('user'))
    const logoutHandler = () => {
        dispatch(logout())
        !localStorage && Navigate('/')

    }
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a className="navbar-brand" href="#">
                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png" width="30" height="30" alt="logo" />
                {datauser?.name}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-list-4">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={`../${datauser?.img}`} />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" onClick={logoutHandler}>Log Out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBarProfile