

const TeamMember = () => {
    return (
        <section className="team-slider-area">

            <div className="container mb-20">

                <div className="row align-items-center justify-content-between">

                    <div className="col-lg-6">

                        <div className="common-heading mb-40">

                            <span className="tagline"><i className="fas fa-plus"></i> team

                                <span className="heading-shadow-text">Members
                                </span>
                            </span>
                            <h2 className="title">Meet The Team</h2>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid ">

                <div className="slick-slider row team-members team-slider slick-initialized" dir="ltr">

                    <div className="slick-list">

                        <div className="slick-track d-flex justify-content-between">

                            <div data-index="-5" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true"
                            >

                                <div>

                                    <div className="col" tabIndex="-1">

                                        <div className="member-box">

                                            <div className="member-photo"><img src="/assets/img/team/hamdi.jpg" alt="Member" />
                                            </div>

                                            <div className="member-info">
                                                <h5 className="name"><a href="company-overview">Hamdi Nahdi</a></h5>

                                                <span className="title">Web Developer
                                                </span>
                                                <ul className="social-links">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div data-index="-4" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true"
                            >

                                <div>

                                    <div className="col" tabIndex="-1">

                                        <div className="member-box">

                                            <div className="member-photo"><img style={{"width":"400px","height":"400px"}} src="assets/img/team/saif.png" alt="Member" />
                                            </div>

                                            <div className="member-info">
                                                <h5 className="name"><a href="company-overview">Houji Saifeddine</a></h5>

                                                <span className="title">Web Developper
                                                </span>
                                                <ul className="social-links">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-index="-4" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true"
                            >

                                <div>

                                    <div className="col" tabIndex="-1">

                                        <div className="member-box">

                                            <div className="member-photo"><img style={{"width":"400px","height":"400px"}} src="assets/img/team/tarek.png" alt="Member" />
                                            </div>

                                            <div className="member-info">
                                                <h5 className="name"><a href="company-overview">Zaafrane Tarek</a></h5>

                                                <span className="title">Web Developper
                                                </span>
                                                <ul className="social-links">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default TeamMember