






const Header = () => {

    return (
        <div>
            <header id="top-menu" class="transparent-head">
                <div class="header-top-area heding-bg pt-15 pb-15 d-none d-lg-block">
                    <div class="container custom-container">
                        <div class="row align-items-center">
                            <div class="col-xl-6 col-lg-6">
                                <div class="top-cta">
                                    <span class="media-link"><i class="far fa-envelope"></i> support@gmail.com</span>
                                    <span class="media-link"><i class="far fa-map-marker-alt"></i> 250 Main Street, 2nd Floor,
                                        USA</span>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-flex justify-content-end">
                                <div class="login-area">
                                    <a class="media-link" href="#"><i class="far fa-lock-alt"></i> Login Or Sing up</a>
                                </div>
                                <div class="top-right-nav">
                                    <ul>
                                        <li> <a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-header-area">
                    <div class="container custom-container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-xl-2 col-lg-2 col-md-6 col-6">
                                <div class="logo">
                                    <a class="logo-img" href="index.html"><img src="/assets/img/logo/header_logo_one.png"
                                        alt="" /></a>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-9 d-none d-lg-block text-lg-center text-xl-right">
                                <div class="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul>
                                            <li><a class="active" href="#">Home <i class="far fa-chevron-down"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="index.html">Home Style 1</a></li>
                                                    <li><a href="index-2.html">Home Style 2</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="#">Events <i class="far fa-chevron-down"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="events.html">Events Grid</a></li>
                                                    <li><a href="events-details.html">Events Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Project <i class="far fa-chevron-down"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="project-01.html">Project One</a></li>
                                                    <li><a href="project-02.html">Project Two</a></li>
                                                    <li><a href="project-03.html">Project Three</a></li>
                                                    <li><a href="project-gallery.html">Project Gallery</a></li>
                                                    <li><a href="project-image.html">Project Image</a></li>
                                                    <li><a href="project-video.html">Project Video</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Blogs <i class="far fa-chevron-down"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                                    <li><a href="blog-standard.html">Blog Standard</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Pages <i class="far fa-chevron-down"></i></a>
                                                <ul class="submenu">
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
                            <div class="col-xl-3 col-lg-1 col-md-6 col-6 text-right">
                                <div class="hamburger-menu d-lg-block d-xl-none">
                                    <a href="javascript:void(0);">
                                        <i class="far fa-bars"></i>
                                    </a>
                                </div>
                                <div class="quote-btn d-none d-xl-block">
                                    <a href="contact.html" class="theme_btn theme_btn_bg">get a quote <i
                                        class="far fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>)
}




export default Header