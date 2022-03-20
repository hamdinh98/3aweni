


const CategorieCard = (props) => {

    return (
        <div className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0s">

            <div className="fancy-box-item mt-30">

                <div className="icon"><i className="flaticon-reading-book"></i>
                </div>

                <div className="content">
                    <h4 className="title"><a href="project-details">{props.value}</a></h4>
                </div>
            </div>

        </div>
    )
}


export default CategorieCard