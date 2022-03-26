import NavbarMenu from "../../components/Home/NavbarMenu"

import Login from "../../components/Home/LoginButton"
import SignUp from "../../components/Home/SignupButton"
import Preloader from "../../components/Home/Preloader"
const Header = () => {
    return (<div>

        <header
            className=" mx-5   ">
            <div className="navbar-wrapper">

                <div className="container">

                    <div className="navbar-inner">

                        <div className="site-logo"><a href="index.html"><img src="/assets/img/logo" alt="Funden" /></a>
                        </div>

                        <NavbarMenu />
                        <div className="d-flex justify-content-around">
                            <Login />
                            <SignUp />


                        </div>

                    </div>
                </div>
            </div>
        </header>

    </div>


    )
}


export default Header