import React, { useState, useEffect } from "react";
import Footer from "../../parts/Home/Footer";
import Header from "../../parts/Home/Header";
import './Profile.module.css'


const Profile = () => {
    const data = JSON.parse(localStorage.getItem('user'))
    const [total, setTotal] = useState(0)

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
                                            <h6 className="mb-0"><img src="/assets/img/profileIcons/project.png" height="50px" width='50px' />  Founded projects</h6>
                                            <span className="text-secondary">{data.FoundedProjects.length}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><img src="/assets/img/profileIcons/backedProject.png" height="50px" width='50px' />Backed projects</h6>
                                            <span className="text-secondary">{data.backedProjects.length}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><img src="/assets/img/profileIcons/donation.png" height="50px" width='50px' />Total money donated</h6>
                                            <span className="text-secondary">{total}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Full Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {data.name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {data.email}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">birth date</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {data.birthDate}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">country</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {data.country}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">state</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {data.state}
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">gender</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {data.gender}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="row gutters-sm">
                                    <div className="col-sm-6 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                                <small>Web Design</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Website Markup</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "72%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>One Page</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Mobile Template</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Backend API</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%" }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                                <small>Web Design</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Website Markup</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "72%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>One Page</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Mobile Template</small>
                                                <div className="progress mb-3" style={{ height: "5px" }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Backend API</small>
                                                <div className="progress mb-3" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%" }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
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