
import CategorieCard from "../../components/Home/CategorieCard"




const PopularCategories = () => {

    const categories = [
        "Education",
        "Medical & Health",
        "clothes",
        "video & films",
        "Technology"
    ]

    const cards = categories.map((e, index) => {

        return <CategorieCard value={e} key={index} />
    })


    return (
        <section class="feature-area grey-bg pos-rel pt-130 pb-100">
            <div class="round-shape">
                <img src="/assets/img/shape/01.png" alt="" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-10 offset-xl-1 wow fadeInUp2 animated" data-wow-delay='.1s'>
                        <div class="section-title text-center mb-85">
                            <h6 class="left-line pl-75 pr-75">Featured Categories</h6>
                            <h2>Explore Current Campaigns <br />
                                <span>Featured Categories</span></h2>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-lg-between">

                    {cards}
                </div>
            </div>
        </section>

    )
}


export default PopularCategories