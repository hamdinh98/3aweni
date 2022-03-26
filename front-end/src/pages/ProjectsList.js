import PageTitle from "../parts/ProjectsList/PageTitle"
import ProjectCard from "../parts/ProjectsList/ProjectCard"


const ProjectsList = () => {

    return (
        <div>
            <PageTitle />
            <section className="project-section section-gap-extra-bottom primary-soft-bg">

                <div className="container">

                    <div className="row project-items justify-content-center project-style-one">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </section>

        </div>
    )
}


export default ProjectsList