import Category from "../../../components/Project/Category"
import Founder from "../../../components/Project/Founder"
import ProgressBar from "../../../components/Project/ProgressBar"
import ProjectRaised from "../../../components/Project/ProjectRaised"
import ReleaseDate from "../../../components/Project/ReleaseDate"
import TitleProject from "../../../components/Project/titleProject"
import  {Link} from 'react-router-dom'


const ProjectContent = () => {
    return (
        <div className="projects__content">
            <Category />

            <h3>

                <TitleProject />
            </h3>
            <Founder />
            <br />
            <ReleaseDate />
            <br />
            <br />
            {/* <ProjectRaised /> */}
            <ProgressBar />
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudatium totam rem aperiam, eaque ipsa quae ab ventore veritatis et quasi architecto beatae vitae dictsunt explicabo. Nemo enim ipsam voluptate voluptasit aspernatur aut odit aut fugit, sed quia cons</p>
            <ul className="cart-list d-sm-flex align-items-center">

                <li><a className="theme_btn theme_btn_bg" href="Donate"
                    data-animation="fadeInLeft" data-delay=".5s">Donate now <i
                        className="far fa-arrow-right"></i></a>
                </li>
                <li>
                    <Link to="/LedgerBook">
                    <a className="theme_btn theme_btn_bg"
                            data-animation="fadeInLeft" data-delay=".5s">View ledger book<i
                className="far fa-arrow-right"></i>
                    </a></Link>
            </li>
            </ul>
        </div>
    )
}

export default ProjectContent