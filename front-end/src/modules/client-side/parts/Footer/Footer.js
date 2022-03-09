import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-area heding-bg pos-rel pt-100" style="background-image:url(assets/img/bg/02.png)">
            <div className="container">
                <div className="footer-bottom-area">
                    <div className="row mb-30">
                        <div className="col-xl-2 col-lg-3 col-md-6  wow fadeInUp2 animated" data-wow-delay='.3s'>
                            <div className="footer__widget mb-30">
                                <h5 className="semi-title mb-25">Quick Links</h5>
                                <ul className="fot-list">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Latest events</a></li>
                                    <li><a href="#">How It Works</a></li>
                                    <li><a href="#">News & articles</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp2 animated" data-wow-delay='.5s'>
                            <div className="footer__widget mb-30 pl-40">
                                <h5 className="semi-title mb-25">Our Project</h5>
                                <ul className="fot-list">
                                    <li><a href="#">Education</a></li>
                                    <li><a href="#">Design</a></li>
                                    <li><a href="#">Film & Video</a></li>
                                    <li><a href="#">Technology</a></li>
                                    <li><a href="#">Games</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6  wow fadeInUp2 animated" data-wow-delay='.7s'>
                            <div className="footer__widget mb-25 pl-85">
                                <h5 className="semi-title mb-25">Our Project</h5>
                                <p className="mb-10">Perspi ciatis unde omnis iste nat
                                    error sit voluptatem accusan</p>
                                <ul className="fot-list address-list">
                                    <li><a href="#"><i className="far fa-map-marker-alt"></i> 250 Main Street, 2nd
                                        Floor,
                                        USA</a></li>
                                    <li><a href="#"><i className="far fa-envelope"></i> support@gmail.com</a></li>
                                    <li><a href="#"><i className="far fa-phone-volume"></i> 888 (0123) 456 79</a></li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6  wow fadeInUp2 animated" data-wow-delay='.9s'>
                            <div className="footer__widget fot_abot mb-30 pl-85">
                                <h5 className="semi-title mb-25">Donation Us</h5>
                                <p className="mb-30">Sed ut perspi ciatis unde omnis iste
                                    natus error sit voluptatem accusantiu doloremque laudantiu totam</p>
                                <div className="subscribe-content foter-subscribe">
                                    <form className="subscribe-form"
                                          action="https://www.devsnews.com/template/fande/fande/form.php">
                                        <input className="form-control" type="text" placeholder="Enter Your Email">
                                            <button><i className="far fa-arrow-right"></i></button>
                                        </input>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#top-menu" className="scroll-target"><i className="far fa-arrow-up"></i></a>
                <div className="copy-right-area pt-30">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 col-md-6">
                            <div className="footer-log mb-30">
                                <a href="index.html" className="footer-logo mb-30"><img
                                    src="assets/img/logo/footer-logo1.png"
                                    alt=""/></a>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <div className="copyright mb-30 text-md-right">
                                <p>© 2020 Given. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer
