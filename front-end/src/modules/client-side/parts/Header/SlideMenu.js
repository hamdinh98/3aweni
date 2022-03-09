import React from 'react';

const SlideMenu = () => {
    return(
        <div className="site-header sticky-header  d-lg-none topbar-transparent transparent-header header-sticky___">
            <div className="header-topbar d-none d-sm-block ">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <ul className="contact-info">
                                <li><a href="#"><i className="far fa-envelope"></i> support@gmail.com</a></li>
                                <li><a href="#"><i className="far fa-map-marker-alt"></i> 250 Main Street, 2nd Floor,
                                    USA</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto d-none d-md-block">
                            <ul className="social-icons">
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-wrapper breakpoint-on">
                <div className="container">
                    <div className="navbar-inner">
                        <div className="site-logo"><a href="index.html"><img src="assets/img/logo.png"
                                                                             alt="Funden"/></a></div>
                        <div className="navbar-extra d-flex align-items-center"><a
                            className="main-btn nav-btn d-none d-sm-inline-block" href="events">Donate Now <i
                            className="far fa-arrow-right"></i></a><a href="#"
                                                                      className="nav-toggler "><span></span></a></div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-panel ">
                <div className="panel-logo"><a href="index.html"><img src="assets/img/logo-white.png" alt="Funden"/></a>
                </div>
                <ul className="panel-menu menu____">
                    <li><a href="#">Home<span className="dd-trigger "><i className="far fa-angle-down"></i></span></a>
                        <ul className="submenu" style="display:none">
                            <li><a href="index.html">Home One</a></li>
                            <li><a href="index-2">Home Two</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Project<span className="dd-trigger "><i
                        className="far fa-angle-down"></i></span></a>
                        <ul className="submenu" style="display:none">
                            <li><a href="project-1">Project One</a></li>
                            <li><a href="project-2">Project Two</a></li>
                            <li><a href="project-3">Project Three</a></li>
                            <li><a href="project-details">Project Details</a></li>
                        </ul>
                    </li>
                    <li><a href="events">Events</a></li>
                    <li><a href="#">News<span className="dd-trigger "><i className="far fa-angle-down"></i></span></a>
                        <ul className="submenu" style="display:none">
                            <li><a href="news-standard">News Standard</a></li>
                            <li><a href="news-details">News Details</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Pages<span className="dd-trigger "><i className="far fa-angle-down"></i></span></a>
                        <ul className="submenu" style="display:none">
                            <li><a href="about">About</a></li>
                            <li><a href="company-overview">Company Overview</a></li>
                            <li><a href="team-member">Team Member</a></li>
                            <li><a href="pricing">Pricing</a></li>
                            <li><a href="testimonial">Testimonial</a></li>
                            <li><a href="faq">FAQ</a></li>
                        </ul>
                    </li>
                    <li><a href="contact">Contact</a></li>
                </ul>
                <div className="panel-extra"><a href="#" className="main-btn btn-white">Donate Now <i
                    className="far fa-arrow-right"></i></a></div>
                <a href="#" className="panel-close"><i className="fal fa-times"></i></a></div>
        </div>

    );
}
export default SlideMenu
