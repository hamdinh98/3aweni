import Badge from "./Badge"



const Founder = () => {
    return (
        <div className="projects__manager d-flex  justify-content-start">
            <div className="manager-img ">
                <img style={{"width":"50px","height":"50px"}} src="/uploads/1652047998421206-2065509_tunisia-flag-icon-png-transparent-png.png" alt="" />
            </div>
            <div className="name">
                <div className="d-flex justify-content-around">
                    <h5>SaifFF</h5>
                    <Badge />
                </div>
                <address>
                    <a href="#">1 Campaigns</a>
                </address>
            </div>
        </div>
    )
}


export default Founder