import styles from "../Donate/donate.css";
import { toast } from "react-toastify";
import {useState , useEffect} from "react";

var Notification_Sucess = () => {
toast.success("Successful Payment ! ");
}

var Notification_Error = () => {
    toast.success("Error in form ! ");
    }

const Donate = () => {
    const values = { amount:"", card_number:"", expiration:"", ccv:""};
    const [formValues,setFormValues]= useState(values);
    const [formErrors,setFormErrors]= useState({});
    const [isSubmit,setIsSubmit]= useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues,[name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0) {
            console.log(formValues);
        }
    },[formErrors]);

    const validate = (values) => {
        const errors = {};
        if (!values.amount){
            errors.amount = " Amount is required ! "
        }
        if (!values.card_number){
            errors.card_number = " Card Number is required ! "
        }
        if (!values.expiration){
            errors.expiration = " Expiration Date is required ! "
        }
        if (!values.ccv){
            errors.ccv = " CCV Code is required ! "
        }
        return errors;

    }; 
    return (
    
    <div class="test">   
    <div class="container_don p-0">
    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
    <form onSubmit={handleSubmit}>
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
                    <p class="text mb-1">Amount Of Donation</p> <input name="amount" class="form-control_don mb-3" type="text" placeholder="10 $" value={formValues.amount} required="required"
                    onChange={handleChange} />
                </div>
                <p>{formErrors.amount}</p>
            </div>
            <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Card Number</p> <input  name="card_number" class="form-control_don mb-3" type="text" placeholder="****" value={formValues.card_number} required="required" 
                    onChange={handleChange} />
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Expiry</p> <input  name="expiration" class="form-control_don mb-3" type="text" placeholder="MM/YYYY" value={formValues.expiration} required="required"
                    onChange={handleChange} />
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text mb-1">CVV/CVC</p> <input  name="ccv" class="form-control_don mb-3 pt-2 " type="password" placeholder="***" value={formValues.ccv} required="required" 
                    onChange={handleChange} />
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary_don mb-3" onClick={Notification_Sucess}> <span class="ps-3">PAY </span> <span class="fas fa-arrow-right"></span> </button>
            </div>
        </div>
    </div>
    </form>
</div>
</div>


    )
}


export default Donate