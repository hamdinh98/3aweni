import PictureGallery from "./GalleryParts/PictureGallery"
import ProjectContent from "./GalleryParts/ProjectContent"

const Gallery = () => {
    return (
        <div>
            <section className="project-image-area gallery-area grey-bg pt-130 pb-100">
                <div className="container">
                    <div className="row no-gutters white-bg">
                        <div className="col-xl-7">
                            <PictureGallery />
                        </div>
                        <div className="col-xl-5">
                            <div className="projects project-cart white-bg mb-30 wow fadeInUp2 animated" data-wow-delay='.1s'>
                                <ProjectContent />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Gallery