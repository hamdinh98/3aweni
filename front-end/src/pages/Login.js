

const Login = () => {
    return (
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

                                        <form>
                                            <p>Please login to your account</p>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form2Example11" className="form-control" placeholder="email address" />
                                                <label className="form-label" for="form2Example11">Username</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example22" className="form-control" />
                                                <label className="form-label" for="form2Example22">Password</label>
                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-1 mb-3" type="button">Log in</button>
                                                <a className="text-muted" href="#!">Forgot password?</a>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Don't have an account?</p>
                                                <button type="button" className="btn btn-outline-success">Create new</button>
                                            </div>

                                            <div className="text-center social-btn">
                                                <a href="#" className="btn btn-primary btn-block"><i className="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
                                                <a href="#" className="btn btn-danger btn-block"><i className="fa fa-google"></i> Sign in with <b>Google</b></a>
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
    )
}


export default Login

