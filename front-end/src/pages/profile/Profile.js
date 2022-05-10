import React, { useState, useEffect } from "react";
import Footer from "../../parts/Home/Footer";
import Header from "../../parts/Home/Header";
import './Profile.module.css'
import {Link} from 'react-router-dom'


const Profile = () => {
    const data = JSON.parse(localStorage.getItem('user'))
    const [total, setTotal] = useState(0)
    const birthday = data.birthDate.split('T')[0]
    useEffect(() => {
        for (let i = 0; i < data.donations.length; i++) {
            setTotal(total + data.donations[i].Money)
        }
    }, [])

    return (
        <>
            <Header />
            <div className="profile">

                <div className="container" id="profile">
                    <br />
                    <br />
                    <br />
                    <div className="main-body">
                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src={data.img} alt="Admin" className="rounded-circle" width="150" />
                                            <div className="mt-3">
                                                <h4>{data.name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-3">
                                    <ul className="list-group list-group-flush">

                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><img src="/assets/img/profileIcons/project.png" height="50px" width='50px' />  <a><Link to="/projectDetails">Founded projects</Link></a></h6>
                                            <span className="text-secondary">{data.FoundedProjects.length+1}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><img src="/assets/img/profileIcons/backedProject.png" height="50px" width='50px' />Backed projects</h6>
                                            <span className="text-secondary">{data.backedProjects.length}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><img src="/assets/img/profileIcons/donation.png" height="50px" width='50px' />Total money donated</h6>
                                            <span className="text-secondary">{total} DT</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <br />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"><img src="/assets/img/profileIcons/name.png" height="50px" width='50px' />  Full Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-dark">
                                                {data.name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"><img src="/assets/img/profileIcons/email.png" height="50px" width='50px' />  Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-dark">
                                                {data.email}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"><img src="/assets/img/profileIcons/birthday.png" height="50px" width='50px' />  Birthday</h6>
                                            </div>
                                            <div className="col-sm-9 text-dark">
                                                {birthday}
                                            </div>
                                        </div>
                                        <hr />
                                        {data.country && <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"><img src="/assets/img/profileIcons/country.png" height="50px" width='50px' />  country</h6>
                                            </div>
                                            <div className="col-sm-9 text-dark">
                                                {data.country}
                                            </div>
                                        </div>}
                                        <hr />
                                        {data.state && <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"><img src="/assets/img/profileIcons/state.png" height="50px" width='50px' />  state</h6>
                                            </div>
                                            <div className="col-sm-9 text-dark">
                                                {data.state}
                                            </div>
                                        </div>}
                                        <hr />

                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"><img src="/assets/img/profileIcons/gender.png" height="50px" width='50px' />  gender</h6>
                                            </div>
                                            <div className="col-sm-9 text-dark">
                                                {data.gender}
                                            </div>
                                        </div>

                                    </div>
                                </div>





                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile