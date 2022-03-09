import React from 'react';

const SlideMenu = () => {
    return(
    <aside className="slide-bar">
        <div className="close-mobile-menu">
            <a href="javascript:void(0);"><i className="fas fa-times"></i></a>
        </div>

        <div className="offset-sidebar">
            <div className="offset-widget offset-logo mb-30">
                <a href="index.html">
                    <img src="assets/img/logo/header_logo_one.png" alt="logo"/>
                </a>
            </div>
            <div className="offset-widget mb-40">
                <div className="info-widget">
                    <h4 className="offset-title mb-20">About Us</h4>
                    <p className="mb-30">
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                        was born and will give you a complete account of the system and expound the actual teachings of
                        the great explore
                    </p>
                    <a className="theme_btn theme_btn_bg" href="contact.html">Contact Us</a>
                </div>
            </div>
            <div className="offset-widget mb-30 pr-10">
                <div className="info-widget info-widget2">
                    <h4 className="offset-title mb-20">Contact Info</h4>
                    <p><i className="fal fa-address-book"></i> 23/A, Miranda City Likaoli Prikano, Dope</p>
                    <p><i className="fal fa-phone"></i> +0989 7876 9865 9 </p>
                    <p><i className="fal fa-envelope-open"></i> info@example.com </p>
                </div>
            </div>
        </div>

        <nav className="side-mobile-menu">
            <ul id="mobile-menu-active">
                <li className="has-dropdown">
                    <a href="index.html">Home</a>
                    <ul className="sub-menu">
                        <li><a href="index.html">Home Style 1</a></li>
                        <li><a href="index-2.html">Home Style 2</a></li>
                    </ul>
                </li>
                <li><a href="about.html">About Us</a></li>
                <li className="has-dropdown">
                    <a href="#">Events</a>
                    <ul className="sub-menu">
                        <li><a href="events.html">Events Grid</a></li>
                        <li><a href="events-details.html">Events Details</a></li>
                    </ul>
                </li>
                <li className="has-dropdown"><a href="#">Project</a>
                    <ul className="submenu">
                        <li><a href="project-01.html">Project One</a></li>
                        <li><a href="project-02.html">Project Two</a></li>
                        <li><a href="project-03.html">Project Three</a></li>
                        <li><a href="project-gallery.html">Project Gallery</a></li>
                        <li><a href="project-image.html">Project Image</a></li>
                        <li><a href="project-video.html">Project Video</a></li>
                    </ul>
                </li>
                <li className="has-dropdown"><a href="#">Blogs</a>
                    <ul className="submenu">
                        <li><a href="blog-grid.html">Blog Grid</a></li>
                        <li><a href="blog-standard.html">Blog Standard</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                        <li><a href="history.html">History</a></li>
                        <li><a href="career.html">Career</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contacts Us</a></li>
            </ul>
        </nav>
    </aside>,
    <div className="body-overlay"></div>

);
}
export default SlideMenu
