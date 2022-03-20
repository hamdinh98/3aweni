import Images from "../../../components/Project/images"
import Video from "../../../components/Project/Video"


const PictureGallery = () => {
    return (
        <div className="gallery-details-area white-bg wow fadeInUp2 animated" data-wow-delay='.1s'>
            <div>
                <div className="tab-content" id="myTabContent">
                    <Video />
                </div>
                <ul className="nav nav-tabs nav-tabs-03" id="myTab" role="tablist">

                    <Images />
                    <Images />
                    <Images />

                </ul>
            </div >
        </div>
    )
}

export default PictureGallery