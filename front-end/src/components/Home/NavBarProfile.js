
import React, { useEffect } from "react";
import { logout } from "../../redux/actions/AuthActions";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
const NavBarProfile = () => {
    const dispatch = useDispatch()
    const datauser = JSON.parse(localStorage.getItem('user'))

    const logoutHandler = () => {
        dispatch(logout())
        !localStorage.getItem('user') && Navigate('/')
    }

    return (
        <nav className="navbar navbar-dark  navbar-expand-sm">
            <a className="navbar-brand text-info " href="#">

                {datauser?.name}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-list-4">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={`../${datauser?.img}`} alt="Admin" className="rounded-circle" width="50" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#"><Link to="/profile">Profile</Link></a>
                            <a className="dropdown-item" onClick={logoutHandler}>Log Out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBarProfile