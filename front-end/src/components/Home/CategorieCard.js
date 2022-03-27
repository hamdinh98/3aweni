


const CategorieCard = (props) => {

    return (
        <div class="col-xl-2 col-lg-4 col-md-4 custom-col wow fadeInUp2 animated" data-wow-delay='.1s'>
            <div class="features white-bg pos-rel text-center mb-30">
                <div class="features__icon mb-20">
                    <i class="flaticon-dish"></i>
                </div>
                <h6><a href="about.html">{props.value}</a></h6>
            </div>
        </div>
    )
}


export default CategorieCard