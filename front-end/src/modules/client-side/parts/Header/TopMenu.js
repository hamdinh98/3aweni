import React from 'react';

const TopMenu = () => {
    return (
    <header id="top-menu">
        <div className="header-top-area  head-top-02 grey-bg pt-15 pb-15 d-none d-lg-block">
            <div className="container custom-container-03">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-8">
                        <ul className="login-area">
                            <li><span>Welcome to Given. Most Popular Crowdfounding Agency</span></li>
                            <li><a className="sign_btn" href="#"><i className="far fa-lock-alt"></i> Sign up</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-5 col-lg-5 d-none d-xl-block">
                        <div className="top-cta text-right">
                            <span className="media-link"><i className="far fa-envelope"></i> support@gmail.com</span>
                            <span className="media-link"><i className="far fa-map-marker-alt"></i> 250 Main Street, 2nd Floor,
                                USA</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-header-area main-head-02">
            <div className="container custom-container-03">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                        <div className="logo">
                            <a className="logo-img" href="index.html"><img src="assets/img/logo/header_logo_two.png"
                                                                           alt=""/></a>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-9 d-none d-lg-block text-lg-center text-xl-right">
                        <div className="main-menu main-menu-02 d-none d-lg-block">
                            <nav>
                                <ul>
                                    <li><a className="active" href="#">Home <i className="far fa-chevron-down"></i></a>
                                        <ul className="submenu">
                                            <li><a href="index.html">Home Style 1</a></li>
                                            <li><a href="index-2.html">Home Style 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="#">Events <i className="far fa-chevron-down"></i></a>
                                        <ul className="submenu">
                                            <li><a href="events.html">Events Grid</a></li>
                                            <li><a href="events-details.html">Events Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Project <i className="far fa-chevron-down"></i></a>
                                        <ul className="submenu">
                                            <li><a href="project-01.html">Project One</a></li>
                                            <li><a href="project-02.html">Project Two</a></li>
                                            <li><a href="project-03.html">Project Three</a></li>
                                            <li><a href="project-gallery.html">Project Gallery</a></li>
                                            <li><a href="project-image.html">Project Image</a></li>
                                            <li><a href="project-video.html">Project Video</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Blogs <i className="far fa-chevron-down"></i></a>
                                        <ul className="submenu">
                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                            <li><a href="blog-standard.html">Blog Standard</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Pages <i className="far fa-chevron-down"></i></a>
                                        <ul className="submenu">
                                            <li><a href="history.html">History</a></li>
                                            <li><a href="career.html">Career</a></li>
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="faq.html">FAQ</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-lg-1 col-md-6 col-6 text-right d-flex align-items-center justify-content-end">
                        <div className="quote-btn mr-10">
                            <a href="contact.html" className="theme_btn theme_btn_bg">get a quote <i
                                className="far fa-arrow-right"></i></a>
                        </div>
                        <div className="hamburger-menu">
                            <a href="javascript:void(0);">
                                <img src="assets/img/logo/bar-icon-01.png" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);
}
export default TopMenu
