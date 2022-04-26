
import Login from "../../components/Home/LoginButton"
import SignUp from "../../components/Home/SignupButton"
import { Link } from "react-router-dom"
import NavBarProfile from "../../components/Home/NavBarProfile"
import NavbarMenu from '../../components/Home/NavbarMenu';
import { useSelector } from "react-redux";
const Header = () => {

    const Auth = useSelector(state => state.Auth)
    return (

        <header
            className=" mx-5  ">
            <div className="navbar-wrapper">

                <div className="container">

                    <div className="navbar navbar-light">

                        <div className="site-logo"><Link to="/"><img src="/assets/img/logo/logo_small.png" alt="Funden" /></Link>
                        </div>

                        <NavbarMenu />
                        <div className="d-flex justify-content-end">

                            {!localStorage.getItem('user') || !Auth.isConnected ? <><Login /><SignUp /></>
                                : <NavBarProfile />}
                        </div>


                    </div>
                </div>
            </div>
        </header >




    )
}


export default Header

