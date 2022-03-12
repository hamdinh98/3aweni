import NavbarMenu from "../../components/Home/NavbarMenu"

import Login from "../../components/Home/LoginButton"
import SignUp from "../../components/Home/SignupButton"
import Preloader from "../../components/Home/Preloader"
const Header = () => {
    return (
        <header
            className="site-header sticky-header d-none d-lg-block topbar-transparent transparent-header header-sticky___">
            <div className="navbar-wrapper">

                <div className="container">

                    <div className="navbar-inner">

                        <div className="site-logo"><a href="index.html"><img src="/assets/img/logo/3aweni.png" alt="Funden" /></a>
                        </div>

                        <NavbarMenu />
                        <Login />
                        <SignUp />

                    </div>
                </div>
            </div>
        </header>


    )
}


export default Header