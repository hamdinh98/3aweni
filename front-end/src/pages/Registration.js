
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
const Registration = () => {
    const { register, handleSubmit } = useForm();

    return (
        <section className="registration-form h-100">
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
                                <form className="col-xl-6" onSubmit={handleSubmit((data) => {
                                    console.log("hello");
                                    console.log(data);
                                })}>
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 text-uppercase">registration form</h3>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                                                    <label className="form-label" for="form3Example1m" {...register("firstName", { required: true })}>First name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                                                    <label className="form-label" for="form3Example1n" {...register("LastName", { required: true })}>Last name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example8" className="form-control form-control-lg" />
                                            <label className="form-label" for="form3Example8" {...register("Email", { required: true })}>Email</label>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="password" id="form3Example1m1" className="form-control form-control-lg" />
                                                    <label className="form-label" for="form3Example1m1"{...register("password", { required: true })}>Password</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="password" id="form3Example1n1" className="form-control form-control-lg" />
                                                    <label className="form-label" for="form3Example1n1" {...register("confirmPassword", { required: true })}>confirm password</label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                                            <h6 className="mb-0 me-4">Gender: </h6>

                                            <div className="form-check form-check-inline mb-0 me-4">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                />
                                                <label className="form-check-label" for="femaleGender">Female</label>
                                            </div>

                                            <div className="form-check form-check-inline mb-0 me-4">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="maleGender"
                                                    value="option2"
                                                />
                                                <label className="form-check-label" for="maleGender">Male</label>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <input type="text" className="country" {...register("country", { required: true })} />
                                                <label >country</label>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <input type="text" className="state" {...register("state", { required: true })} />
                                                <label >state</label>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="file" />
                                            <label className="form-label" for="form3Example9">Profile Picture</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="date" id="form3Example90" className="form-control form-control-lg" />
                                            <label className="form-label" for="form3Example90">birthDate</label>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Registration