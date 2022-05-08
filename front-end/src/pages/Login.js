import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../parts/Home/Footer"
import Header from "../parts/Home/Header"
import { LoginAction } from "../redux/actions/AuthActions";
import LoginWithGoogle from "../components/Login/LoginWithGoogle";
import FaceIDLogin from "../components/Login/FaceIDLogin";
const Login = () => {
    const [showCam, setShowCam] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const AuthState = useSelector(state => state.Auth)
    const navigate = useNavigate()
    const submit = async (data) => {
        // console.log(data);
        dispatch(LoginAction(data))
        // si la globale state isConnected== true donc on va stocker tokens dans localstorage
        // wa9t eli yetsab token f localstorage yaamel redirection lel page home
        console.log(AuthState);
    }
    useEffect(() => {
        AuthState.isConnected && localStorage.setItem('authTokens', JSON.stringify(AuthState.tokens))
        AuthState.isConnected && localStorage.setItem('user', JSON.stringify(AuthState.user))
        localStorage.getItem('authTokens') && navigate('/')

    }, [AuthState.isConnected])


    return (
        <div>
            <Header />
            <section className="login-section h-100 gradient-form ">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                <img src="/assets/img/logo/3aweni.png" alt="logo" className="imgLogin" />
                                                <h4 className="mt-1 mb-5 pb-1">Welcome among us </h4>
                                            </div>

                                            <form onSubmit={handleSubmit(submit)}>
                                                <p>Please login to your account</p>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example11" className="form-control" placeholder="email address" {...register("email", { required: true, pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' })} />
                                                    <label className="form-label" for="form2Example11">Email</label>
                                                </div>
                                                {(errors.email?.type === 'required') && <div class="alert alert-danger" role="alert">
                                                    email is required
                                                </div>}
                                                {(errors.email?.type === 'pattern') && <div class="alert alert-danger" role="alert">
                                                    invalid email
                                                </div>}

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example22" className="form-control" {...register("password", { required: true, minLength: 8 })} />
                                                    <label className="form-label" for="form2Example22" >Password</label>
                                                </div>
                                                {(errors.password?.type === "required") && <div class="alert alert-danger" role="alert">
                                                    password is required
                                                </div>}
                                                {(errors.password?.type === "minLength") && <div class="alert alert-danger" role="alert">
                                                    password length must be at least 8
                                                </div>}

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-1 mb-3" type="submit">Log in</button>
                                                    {/* {AuthState.error.data?.error} */}
                                                    {AuthState?.error?.data?.error && <div className="alert alert-warning" role="alert">
                                                        {AuthState?.error?.data?.error}
                                                    </div>}
                                                    <a className="text-muted" href="#!"><Link to="/forgotPassword">Forgot password ?</Link></a>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <Link to='/registration' className="btn btn-outline-success">Create new</Link>
                                                </div>

                                                <div className="text-center social-btn">
                                                    <a href="#" className="btn btn-primary btn-block" onClick={() => setShowCam(true)}><i className="fa fa-facebook"></i> Sign in with <b>Face ID</b></a>
                                                    {showCam && <FaceIDLogin />}



                                                    <LoginWithGoogle />
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}


export default Login

