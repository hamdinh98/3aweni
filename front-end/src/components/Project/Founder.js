import Badge from "./Badge"



const Founder = () => {
    return (
        <div className="projects__manager d-flex  justify-content-start">
            <div className="manager-img ">
                <img src="/assets/img/project/03.png" alt="" />
            </div>
            <div className="name">
                <div className="d-flex justify-content-around">
                    <h5>Somalia D Silva</h5>
                    <Badge />
                </div>
                <address>
                    <a href="#">9 Campaigns</a>
                </address>
            </div>
        </div>
    )
}


export default Founder