


const AboutText = () => {
    return (
        <div>
            <section className="about-section-three section-gap">

                <div className="container">

                    <div className="row align-items-center justify-content-center">

                        <div className="col-xl-5 col-lg-7 col-md-9 col-sm-10">

                            <div className="about-text mb-lg-50">

                                <div className="common-heading mb-30">

                                    <span className="tagline"><i className="fas fa-plus"></i> About us

                                        <span className="heading-shadow-text">About Us
                                        </span>
                                    </span>
                                    <h2 className="title">3AWENI : Let Us Help Kickstart Your Project</h2>
                                </div>

                                <p>People all around the world, and especially Tunisia visit 3AWENI to find clever and unconventional
                                    ideas that solve everyday problems large and small. By giving charities and entrepreneurs everywhere
                                    a platform to launch new and groundbreaking products and humanitarian campaigns, we help surface innovations in tech,
                                    design, push forward the economy, and shine light on the value of solidarity.
                                </p>
                                <ul className="check-list mt-30">
                                    <li className="wow fadeInUp" data-wow-delay="0s">
                                        <h5 className="title">High Success Rates</h5>

                                        <p>Our "no time limit" policy increases the success chances of any campaign drastically.</p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="0.1s">
                                        <h5 className="title">Raise Funds With Crowdfunding</h5>

                                        <p>An under-utilized concept in Tunisia, crowdfunding might be the small push you needed for success!</p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="0.2s">
                                        <h5 className="title">Millions in Funding</h5>

                                        <p>Easy to use payment system, and no goal ceiling. The ultimate alternative to bank loans!</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-7 col-lg-8 col-md-10">

                            <div className="about-gallery wow fadeInRight">

                                <div className="img-one"><img src="/assets/img/about/about-gallery-1.jpg" alt="Image" />
                                </div>

                                <div className="img-two wow fadeInUp"><img src="/assets/img/about/about-gallery-2.jpg"
                                    alt="Image" />
                                </div>

                                <div className="pattern"><img src="/assets/img/about/about-gallery-pattern.png" alt="Pattern" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-section primary-soft-bg section-gap">

                <div className="container">

                    <div className="common-heading text-center mb-10">

                        <span className="tagline"><i className="fas fa-plus"></i> What We Do

                            <span className="heading-shadow-text">Features
                            </span>
                        </span>
                        <h2 className="title">Why choose us</h2>
                    </div>

                    <div className="row icon-boxes justify-content-center">

                        <div className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp" data-wow-delay="0.1s">

                            <div className="icon-box mt-30">

                                <div className="icon"><i className="flaticon-debit-card"></i>
                                </div>
                                <h5 className="title">Fast &amp; Easy Payouts</h5>

                                <p>few steps are required to perform a secure payment and support your desired project!</p><a className="link" href="project-details"><i
                                        className="far fa-arrow-right"></i></a>

                                <span className="box-index">01
                                </span>

                                <div className="box-img"><img src="/assets/img/icon-box-bg.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp" data-wow-delay="0.2s">

                            <div className="icon-box mt-30">

                                <div className="icon"><i className="flaticon-payment"></i>
                                </div>
                                <h5 className="title">Global Payment Processing</h5>

                                <p>There are no location restrictions! you can en gage and donate from any place in the world!</p><a className="link" href="project-details"><i
                                        className="far fa-arrow-right"></i></a>

                                <span className="box-index">02
                                </span>

                                <div className="box-img"><img src="/assets/img/icon-box-bg.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp" data-wow-delay="0.3s">

                            <div className="icon-box mt-30">

                                <div className="icon"><i className="flaticon-wallet-1"></i>
                                </div>
                                <h5 className="title">Many Payment Options</h5>

                                <p>Visa or MasterCard, it Doesn't matter what company, you work with, we accept them all!</p><a className="link" href="project-details"><i
                                        className="far fa-arrow-right"></i></a>

                                <span className="box-index">03
                                </span>

                                <div className="box-img"><img src="/assets/img/icon-box-bg.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default AboutText