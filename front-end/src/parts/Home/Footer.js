

const Footer = () => {

    return (<div>
        <br />
        <br />
        <br />
        <br />

        <footer className="site-footer ">

            <div className="footer-content-area">

                <div className="container">

                    <div className="footer-widgets">

                        <div className="row justify-content-between">

                            <div className="col-xl-3 col-lg-4 col-md-6">

                                <div className="widget about-widget">

                                    <div className="footer-logo"><img src="/assets/img/logo/logo_small.png" alt="Funden" />
                                    </div>

                                    <p>Together, we achieve more</p>

                                    <div className="newsletter-form">
                                        <h5 className="form-title">Join Our Newsletters</h5>

                                        <form action="#">
                                            <input type="text" placeholder="Email Address" /><button type="submit"><i
                                                className="far fa-arrow-right"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-5 col-sm-6">

                                <div className="widget nav-widget">
                                    <h4 className="widget-title">Our Projects</h4>
                                    <ul>
                                        <li><a href="project-1">Medical &amp; Health</a></li>
                                        <li><a href="project-2">Educations</a></li>
                                        <li><a href="project-1">Technology</a></li>
                                        <li><a href="project-3">Web Development</a></li>
                                        <li><a href="project-2">Food &amp; Clothes</a></li>
                                        <li><a href="project-1">Video &amp; Movies</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6">

                                <div className="widget nav-widget">
                                    <h4 className="widget-title">Support</h4>
                                    <ul>
                                        <li><a href="about">Privacy Policy</a></li>
                                        <li><a href="contact">Conditions</a></li>
                                        <li><a href="company-overview">Company</a></li>
                                        <li><a href="faq">Faq &amp; Terms</a></li>
                                        <li><a href="contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-auto col-md-5 col-sm-8">

                                <div className="widget contact-widget">
                                    <h4 className="widget-title">Contact Us</h4>
                                    <ul className="info-list">
                                        <li>

                                            <span className="icon"><i className="far fa-phone"></i>
                                            </span>

                                            <span className="info">

                                                <span className="info-title">Phone Number
                                                </span><a href="#">+216 70 685 685</a>
                                            </span>
                                        </li>
                                        <li>

                                            <span className="icon"><i className="far fa-envelope-open"></i>
                                            </span>

                                            <span className="info">

                                                <span className="info-title">Email Address
                                                </span><a href="#">3aweni2022@gmail.com</a>
                                            </span>
                                        </li>
                                        <li>

                                            <span className="icon"><i className="far fa-map-marker-alt"></i>
                                            </span>

                                            <span className="info">

                                                <span className="info-title">Locations
                                                </span><a href="#">Cebalat Ben Ammar 2083, TUNISIA</a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">

                        <div className="row flex-md-row-reverse">

                            <div className="col-md-6">
                                <ul className="social-icons">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </div>

                            <div className="col-md-6">

                                <p className="copyright-text">©
                                    2022 <span> </span>
                                    <a href="#">3aweni</a>. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    )
}


export default Footer