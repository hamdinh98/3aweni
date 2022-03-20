import Gallery from "../parts/ProjectDetails/Gallery"
import Updates from '../parts/ProjectDetails/Updates'
import BackerList from '../parts/ProjectDetails/BackerList'
import Description from '../parts/ProjectDetails/Description'
import Discussion from "../parts/ProjectDetails/Discussion"
import PageTitle from "../parts/ProjectDetails/PageTitle"
const ProjectDetails = () => {
    return (
        <div>
            <PageTitle />
            <Gallery />
            <section className="our-overview-area pos-rel  wow fadeInUp2 animated" data-wow-delay='.5s'>
                <div className="row">
                    <div className="col-xl-12">
                        <ul className="nav nav-tabs nav-tabs-02" id="myTab-02" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link theme_btn active" id="home-tab" data-toggle="tab" href="#home-01" role="tab" aria-controls="home-01" aria-selected="true">Description</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link theme_btn" id="profile-tab" data-toggle="tab" href="#profile-01" role="tab" aria-controls="profile-01" aria-selected="false">Updates</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link theme_btn" id="contact-tab" data-toggle="tab" href="#contact-02" role="tab" aria-controls="contact-02" aria-selected="false">Backer List</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link theme_btn" id="contact2-tab" data-toggle="tab" href="#contact-03" role="tab" aria-controls="contact-03" aria-selected="false">Discussion</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent-02">
                            <Discussion />
                            <Description />
                            <Updates />
                            <BackerList />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default ProjectDetails