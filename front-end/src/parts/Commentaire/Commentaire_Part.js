const Commentaire_Part = () => {

return(
        <div class="col-lg-15">
            <div class="contact-form">
                <form action="#">
                    <h3 class="form-title">Comment</h3>
                    <div class="row">
                        <div class="col-12">
                            <div class="form-field mb-20"><label for="message">Write
                                    Comment</label><textarea id="message"
                                    placeholder="Type your comment here "></textarea></div>
                        </div>
                        <div class="col-12">
                            <div class="form-field"><button class="main-btn">Post comment <i
                                        class="far fa-arrow-right"></i></button></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Commentaire_Part