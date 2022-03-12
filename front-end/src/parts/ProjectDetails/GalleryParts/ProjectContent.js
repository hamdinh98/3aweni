import Category from "../../../components/Project/Category"
import Founder from "../../../components/Project/Founder"
import ProgressBar from "../../../components/Project/ProgressBar"
import ReleaseDate from "../../../components/Project/ReleaseDate"
import TitleProject from "../../../components/Project/titleProject"



const ProjectContent = () => {
    return (
        <div className="projects__content">
            <Category />

            <h3>

                <TitleProject />
            </h3>
            <Founder />
            <ReleaseDate />
            <ProgressBar />
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudatium totam rem aperiam, eaque ipsa quae ab ventore veritatis et quasi architecto beatae vitae dictsunt explicabo. Nemo enim ipsam voluptate voluptasit aspernatur aut odit aut fugit, sed quia cons</p>
            <ul className="cart-list d-sm-flex align-items-center">
                <li>
                    <form className="cart-plus-minus" action="https://www.devsnews.com/template/fande/fande/form.php">
                        <div className="plus-minus pos-rel">
                            <input type="text" value="$5" />
                            <div className="updown plus"><i className="far fa-chevron-left"></i></div>
                            <div className="updown minus"><i className="far fa-chevron-right"></i></div>
                        </div>
                    </form>
                </li>
                <li><a className="theme_btn theme_btn_bg" href="contact.html"
                    data-animation="fadeInLeft" data-delay=".5s">Donate now <i
                        className="far fa-arrow-right"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default ProjectContent