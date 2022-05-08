
import axios from "axios";
import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from '../../redux/actions/AuthActions'
import { useEffect } from "react";

const LoginWithGoogle = () => {
    const dispatch = useDispatch()
    const AuthState = useSelector(state => state.Auth)
    const navigate = useNavigate()
    const responseGoogle = async (response) => {
        console.log(response);
        //const profile = response.profileObj
        const { data } = await axios.get(`https://people.googleapis.com/v1/people/${response.Ba}?personFields=birthdays,genders,locations&access_token=${response.accessToken}`)

        const user = {
            name: response.profileObj.name,
            email: response.profileObj.email,
            birthDate: data.birthdays ? data.birthdays[0].date.year + "-" + data?.birthdays[0].date.month + "-" + data?.birthdays[0].date.day : undefined,
            img: response.profileObj.imageUrl,
            confirm: 1,
            gender: data.genders ? data?.genders[0].value : "male",
        }
        console.log(user);
        dispatch(loginWithGoogle(user))
        console.log(AuthState);
    }
    const responseErrorGoogle = (response) => {
        console.log(response);
    }
    useEffect(() => {
        AuthState.isConnected && localStorage.setItem('authTokens', JSON.stringify(AuthState.tokens))
        AuthState.isConnected && localStorage.setItem('user', JSON.stringify(AuthState.user))
        localStorage.getItem('authTokens') && navigate('/')

    }, [AuthState.isConnected])
    return (
        < GoogleLogin
            clientId="327474210876-m042p28q0g04qu9o8jefpb39u9db99ps.apps.googleusercontent.com"
            buttonText="Login with google account"
            onSuccess={responseGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
        />)
}


export default LoginWithGoogle