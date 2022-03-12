


const NavbarMenu = () => {
    return (
        <div className="nav-menu menu____">
            <ul>
                <li><a href="#">Home

                    <span className="dd-trigger"><i className="far fa-angle-down"></i>
                    </span></a>
                    <ul className="submenu">
                        <li><a href="index.html">Home One</a></li>
                        <li><a href="index-2">Home Two</a></li>
                    </ul>
                </li>
                <li><a href="#">Project

                    <span className="dd-trigger"><i className="far fa-angle-down"></i>
                    </span></a>
                    <ul className="submenu">
                        <li><a href="project-1">Project One</a></li>
                        <li><a href="project-2">Project Two</a></li>
                        <li><a href="project-3">Project Three</a></li>
                        <li><a href="project-details">Project Details</a></li>
                    </ul>
                </li>

                <li><a href="contact">Contact</a></li>
            </ul>
        </div>
    )
}


export default NavbarMenu