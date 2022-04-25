import styles from "../Donate/donate.css";
import { toast } from "react-toastify";

var Notification_Sucess = () => {
toast.success("Successful Payment ! ");
}

var Notification_Error = () => {
    toast.success("Error in form ! ");
    }

const Donate = () => {
    return (

    <div class="test">   
    <div class="container_don p-0">
    <div class="card_don px-4">
        <p class="h8 py-3">Payment Details</p>
        <div class="row gx-3">
        <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Donor Name </p> <input class="form-control_don2 mb-3" type="text" value="Foulén Fouléni" readonly="readonly"/>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Project Name </p> <input class="form-control_don2 mb-3" type="text" value="Wireless Headphones" readonly="readonly"/>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Amount Of Donation</p> <input class="form-control_don mb-3" type="text" placeholder="10 $" required="required"/>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Card Number</p> <input class="form-control_don mb-3" type="text" placeholder="****" required="required" />
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Expiry</p> <input class="form-control_don mb-3" type="text" placeholder="MM/YYYY" required="required"/>
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text mb-1">CVV/CVC</p> <input class="form-control_don mb-3 pt-2 " type="password" placeholder="***" required="required" />
                </div>
            </div>
            <div class="col-12">
                <div class="btn btn-primary_don mb-3" onClick={Notification_Sucess}> <span class="ps-3">PAY </span> <span class="fas fa-arrow-right"></span> </div>
            </div>
        </div>
    </div>
</div>
</div> 

    )
}

export default Donate