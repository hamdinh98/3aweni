import { Link } from "react-router-dom"



const Login = () => {


    return (
        <div className="navbar-extra d-flex align-items-center"><Link className="main-btn nav-btn d-none d-sm-inline-block" to='/login'>Login</Link><a href="#" className="nav-toggler">
            <span>
            </span></a>
        </div>
    )
}


export default Login