import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../parts/Home/Footer'
import Header from '../parts/Home/Header'
import { sendVerifCode, updatePassword, verifCode } from '../redux/actions/ChangeForgPassActions'


const ForgotPaswword = () => {
    const dispatch = useDispatch()
    const ForgotPassword = useSelector(state => state.ForgotPassword)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [sendCode, setSendCode] = useState(false);
    const [verifcode, setVerifcode] = useState(false)
    const submit = () => {
        dispatch(sendVerifCode(email))
        if (ForgotPassword.success)
            setSendCode(true)

        // console.log(ForgotPassword);
    }
    const onChangeHandler = (value) => {
        console.log(value);
        dispatch(verifCode(value));
        if (ForgotPassword.success) {
            setSendCode(false)
            setVerifcode(true)
        }
    }

    const updatepass = () => {
        console.log(ForgotPassword);
        dispatch(updatePassword(password))
    }

    return (
        <>
            <Header />
            <div class="container" style={{ 'margin-left': '35%', 'margin-top': '10%', 'margin-bottom': '5%' }}>
                <div class="form-gap" ></div>
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                        <div class="panel panel-default">
                            <div class="panel-body">
                                {!sendCode && !verifcode && <div class="text-center">
                                    <h3><i class="fa fa-lock fa-4x"></i></h3>
                                    <h2 class="text-center">Forgot Password?</h2>
                                    <p>Put your email and you will recieve a verification code to reset your password</p>
                                    <div class="panel-body">

                                        <div class="form" >

                                            <div class="form-group">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                                    <input id="email" name="email" placeholder="email address" class="form-control" type="email" onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input class="btn btn-lg btn-primary btn-block" value="Send code" onClick={submit} />
                                            </div>

                                            <input type="hidden" class="hide" name="token" id="token" value="" />
                                        </div>
                                    </div>
                                </div>}

                                {sendCode && <>{ForgotPassword.error ? <div class="alert alert-danger" role="alert">
                                    {ForgotPassword.error?.msg}
                                </div> : <div><div class="alert alert-success" role="alert">
                                    {ForgotPassword.success?.data} check your email
                                </div>
                                    <input name="code" placeholder="verification code" class="form-control" type="number" onChange={(e) => onChangeHandler(e.target.value)} /></div>}</>}

                                {verifcode && <div class="container">
                                    <label>New Password</label>
                                    <div class="form-group pass_show">
                                        <input type="password" class="form-control" placeholder="New Password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <label>Confirm Password</label>
                                    <div class="form-group pass_show">
                                        <input type="password" class="form-control" placeholder="Confirm Password" />
                                    </div>
                                    <input type="submit" class="btn btn-lg btn-primary btn-block" value="submit" onClick={updatepass} />

                                    {ForgotPassword.error ? <div class="alert alert-danger" role="alert">{ForgotPassword.error?.msg}</div> : <div class="alert alert-success" role="alert">{ForgotPassword.success?.msg}</div>}


                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )


}


export default ForgotPaswword