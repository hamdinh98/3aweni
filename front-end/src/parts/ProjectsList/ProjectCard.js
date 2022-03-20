import Category from "../../components/Project/Category"
import Founder from "../../components/Project/Founder"
import ProgressBar from "../../components/Project/ProgressBar"
import ReleaseDate from "../../components/Project/ReleaseDate"
import TitleProject from "../../components/Project/titleProject"

const ProjectCard = () => {


    return (
        <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item mb-3">
                <img src="/assets/img/project/02.jpg" className="img-card" />
                <div className="content">
                    <div className="cats">
                        <Category />
                    </div>
                    <div className="author">
                        <Founder />
                    </div>
                    <h5 className="title"><TitleProject /></h5>

                    <div className="project-stats">
                        <ProgressBar />
                    </div>
                    <ReleaseDate />
                </div>
            </div>
        </div>
    )
}


export default ProjectCard