import Gallery from "../parts/ProjectDetails/Gallery"
import Updates from '../parts/ProjectDetails/Updates'
import BackerList from '../parts/ProjectDetails/BackerList'
import Description from '../parts/ProjectDetails/Description'
import PageTitle from "../parts/ProjectDetails/PageTitle"
import Comments_List from '../parts/Commentaire/Comments_List'
import { Link, Routes, Route } from "react-router-dom"
import Header from "../parts/Home/Header"
import Footer from "../parts/Home/Footer"
const ProjectDetails = () => {
    return (
        <div>
            <Header />
            <PageTitle />
            <Gallery />
            <section className="our-overview-area pos-rel  wow fadeInUp2 animated" data-wow-delay='.5s'>
                <div className="row">
                    <div className="col-xl-12">
                        <ul className="nav nav-tabs nav-tabs-02" id="myTab-02" role="tablist">
                            <li className="nav-item">
                                <Link to="/projectDetails" className="nav-link theme_btn active" id="home-tab" data-toggle="tab" href="#home-01" role="tab" aria-controls="home-01" aria-selected="true">Description</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projectDetails/updates" className="nav-link theme_btn" id="profile-tab" data-toggle="tab" href="#profile-01" role="tab" aria-controls="profile-01" aria-selected="false">Updates</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projectDetails/backerList" className="nav-link theme_btn" id="contact-tab" data-toggle="tab" href="#contact-02" role="tab" aria-controls="contact-02" aria-selected="false">Backer List</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projectDetails/discussion" className="nav-link theme_btn" id="contact2-tab" data-toggle="tab" href="#contact-03" role="tab" aria-controls="contact-03" aria-selected="false">Discussion</Link>
                            </li>
                        </ul>
                        <Routes>

                            <Route path="/" element={<Description />} />
                            <Route path="/discussion" element={<Comments_List />} />
                            <Route path="/updates" element={<Updates />} />
                            <Route path="/backerList" element={<BackerList />} />

                        </Routes>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}


export default ProjectDetails