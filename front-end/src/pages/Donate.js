import styles from "./css/donate.css";

const Donate = () => {
    return (

        <div class="container p-0">
    <div class="card px-4">
        <p class="h8 py-3">Payment Details</p>
        <div class="row gx-3">
        <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Donor Name </p> <input class="form-control2 mb-3" type="text" value="Foulén Fouléni" readonly="readonly"/>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Project Name </p> <input class="form-control2 mb-3" type="text" value="Wireless Headphones" readonly="readonly"/>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Amount Of Donation</p> <input class="form-control mb-3" type="text" placeholder="10 $"/>
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Expiry</p> <input class="form-control mb-3" type="text" placeholder="MM/YYYY"/>
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text mb-1">CVV/CVC</p> <input class="form-control mb-3 pt-2 " type="password" placeholder="***"/>
                </div>
            </div>
            <div class="col-12">
                <div class="btn btn-primary mb-3"> <span class="ps-3">PAY </span> <span class="fas fa-arrow-right"></span> </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default Donate