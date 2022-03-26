

const Discussion = () => {

    return (
        <div className=" mx-3" >
            <div className="row">
                <div className="col-xl-10">
                    <div className="review-box pt-50">
                        <h5 className="mb-35">1 Review For Women Winter Dress</h5>
                        <div className="reviewer d-sm-flex">
                            <div className="reviewer__img">
                                <img src="assets/img/project/05.png" alt="" />
                            </div>
                            <div className="reviewer__content">
                                <p>Alexzender,<span>25 Janu 2019</span></p>
                                <div className="review-icon">
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                </div>
                                <span>But I must explain to you how all this mistaken idea of
                                    denouncing pleasure and praising pain was born and I will give
                                    you a complete account of the system, and expound the actual
                                    teachings of the great explorer of the truth, the master.</span>
                            </div>
                        </div>
                    </div>
                    <div className="post-form-area review-form pt-50 pb-120">
                        <h5 className="review-title mb-15">Add a Review</h5>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="input-box">
                                    <div className="input-text mb-35">
                                        <input type="text" className="form-control"
                                            placeholder="Your Name :" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="input-box mb-35">
                                    <div className="input-text input-mail">
                                        <input type="text" className="form-control"
                                            placeholder="Your Email :" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="input-box mb-25">
                                    <div className="review-icon">
                                        <span>Your Rating :</span>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                    </div>
                                    <div className="input-text input-message">
                                        <textarea name="message" id="message" cols="30" rows="10"
                                            placeholder="Your Review"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="review-btn">
                                    <a className="theme_btn theme_btn_bg" href="contact.html">send
                                        review <i className="far fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Discussion