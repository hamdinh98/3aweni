
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Header from '../parts/Home/Header';
import Footer from '../parts/Home/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { RegistrationAction } from '../redux/actions/AuthActions';
import { useState } from 'react';







const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [matchPwd, setPwd] = useState(false)
    const dispatch = useDispatch();
    const AuthState = useSelector(state => state.Auth)

    const submit = (data) => {

        console.log(data);
        var formData = new FormData();
        formData.append("img", data.img['0']);
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("password", data.password)
        formData.append("confirmPwd", data.confirmPwd)
        formData.append("gender", data.gender)
        formData.append("country", data.country)
        formData.append("state", data.state)
        formData.append("birthDate", data.birthDate)
        setPwd(data.password === data.confirmPwd)
        dispatch(RegistrationAction(formData))
        console.log(AuthState);
    }

    // useEffect(() => {
    //     console.log(AuthState.error);
    // })



    return (
        <>
            <Header />
            <section className=" h-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                            alt="Sample photo"
                                            className="img-fluid"

                                        />
                                    </div>
                                    <form className="col-xl-6" onSubmit={handleSubmit(submit)}>
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">registration form</h3>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline mb-4">
                                                        <input type="text" className="form-control form-control-lg" {...register("name", { required: true })} />

                                                        <label className="form-label" for="form3Example1m" >Full name</label>
                                                        {(errors.name?.type) && <div class="alert alert-danger" role="alert">
                                                            name is required
                                                        </div>}
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example8" className="form-control form-control-lg" {...register("email", { required: true, pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' })} />
                                                <label className="form-label" for="form3Example8" >Email</label>
                                                {errors.email?.type === "required" && <div class="alert alert-danger" role="alert">
                                                    email is required
                                                </div>}
                                                {errors.email?.type === "pattern" && <div class="alert alert-danger" role="alert">
                                                    email is invalid
                                                </div>}
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="password" id="form3Example1m1" className="form-control form-control-lg" {...register("password", { required: true, minLength: 8 })} />
                                                        <label className="form-label" for="form3Example1m1">Password</label>
                                                        {errors.password?.type === "required" && <div className="alert alert-danger" role="alert">
                                                            password is required
                                                        </div>}
                                                        {errors.password?.type === "minLength" && <div className="alert alert-danger" role="alert">
                                                            password length must be at least 8
                                                        </div>}
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="password" id="form3Example1n1" className="form-control form-control-lg" {...register("confirmPwd", { required: true, })} />
                                                        <label className="form-label" for="form3Example1n1" >repeat password</label>
                                                        {!matchPwd && <div className="alert alert-danger" role="alert">
                                                            confirm password does not match
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-md-flex justify-content-start align-items-center mb-2 py-1">

                                                <h6 className="mb-0 me-4">Gender: </h6>
                                                <select {...register("gender", { required: true })} >
                                                    <option value="female">female</option>
                                                    <option value="male">male</option>
                                                </select>
                                                {errors.gender?.type && <div class="alert alert-danger" role="alert">
                                                    gender required
                                                </div>}

                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">

                                                    <input type="text" className="country" {...register("country", { required: true })} />
                                                    <label >country</label>
                                                    {errors.country?.type && <div class="alert alert-danger" role="alert">
                                                        country required
                                                    </div>}

                                                </div>
                                                <div className="col-md-6 mb-4">

                                                    <input type="text" className="state" {...register("state", { required: true })} />
                                                    <label >state</label>
                                                    {errors.state?.type && <div class="alert alert-danger" role="alert">
                                                        state is required
                                                    </div>}
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="file" {...register("img", { required: true })} />
                                                <label className="form-label" for="form3Example9">Profile Picture</label>
                                                {errors.img?.type && <div class="alert alert-danger" role="alert">
                                                    profile Picture is required
                                                </div>}
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="date" id="form3Example90" className="form-control form-control-lg" {...register("birthDate", { required: true })} />
                                                <label className="form-label" for="form3Example90" >birthDate</label>
                                                {errors.birthDate?.type && <div class="alert alert-danger" role="alert">
                                                    birthDate is required
                                                </div>}
                                            </div>
                                            <div>
                                                <Link to="/login">I have an account</Link>
                                            </div>

                                            <div className="d-flex justify-content-end pt-3">
                                                <input type="submit" className="btn btn-warning btn-lg ms-2" />
                                            </div>

                                        </div>
                                    </form>

                                </div>
                                {!AuthState?.error && <div className="alert alert-success" role="alert">
                                    successfull registration please check your email to confirm your account
                                </div>}
                                {AuthState?.error && <div className="alert alert-warning" role="alert">
                                    {AuthState.error.data}
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>

    )
}

export default Registration