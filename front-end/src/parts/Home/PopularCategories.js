import { useState } from "react"
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
        <section className="popular-categories section-gap">

            <div className="container">

                <div className="categories-header">

                    <div className="row align-items-center justify-content-between">

                        <div className="col-auto">

                            <div className="common-heading mb-30">

                                <span className="tagline"><i className="fas fa-plus"></i> what we do

                                    <span className="heading-shadow-text">Category
                                    </span>
                                </span>
                                <h2 className="title">Popular Categories</h2>
                            </div>
                        </div>

                        <div className="col-auto"><a className="main-btn mb-30" href="project-1">View All Category <i
                            className="far fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center fancy-icon-boxes">
                    {cards}

                </div>
            </div>
        </section>
    )
}


export default PopularCategories