


const ProgressBar = () => {
    return (
        <div className="skill mb-20">
            <p className="skill-para">Raised of <span>$2535</span></p>
            <h5>95%</h5>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="95"
                    aria-valuemin="0" aria-valuemax="95">
                </div>
            </div>
        </div>
    )
}

export default ProgressBar