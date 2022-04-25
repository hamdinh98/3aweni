import { Link } from "react-router-dom"



const NavbarMenu = () => {
    return (
        <div className="nav-menu menu____">
            <ul>

                <li><a href="contact"><Link to="/about">what we do</Link> </a></li>

                <li><a href="#">Start a Campaign

                </a></li>




            </ul>
        </div>
    )
}


export default NavbarMenu