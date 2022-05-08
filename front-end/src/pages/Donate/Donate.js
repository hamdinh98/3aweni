import styles from "../Donate/donate.css";
import { toast } from "react-toastify";
import React,{Component, useState,useEffect} from 'react';
import axios from 'axios';

var Notification_Sucess = () => {
    
toast.success("Successful Payment ! ");
}

var Notification_Error = () => {
    toast.success("Error in form ! ");
    }

 

class Donate extends Component{

    constructor(props) {
        super(props);
        
    this.state = {
        Money:""
    }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:5000/addPayement/624b0ed9f6b79446ac5f3639',this.state)
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })}


    render() {
        const {Money} = this.state
    return (
        
    
    <div class="test">   
    <div class="container_don p-0">
    <form onSubmit={this.submitHandler}>
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
                    <p class="text mb-1">Amount Of Donation</p> <input name="Money" class="form-control_don mb-3" type="text" placeholder="10 $" value={Money} onChange={this.changeHandler} required="required"
                     />
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Card Number</p> <input  name="card_number" class="form-control_don mb-3" type="text" placeholder="****"  required="required" 
                    />
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Expiry</p> <input  name="expiration" class="form-control_don mb-3" type="text" placeholder="MM/YYYY"  required="required"
                    />
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text mb-1">CVV/CVC</p> <input  name="ccv" class="form-control_don mb-3 pt-2 " type="password" placeholder="***" required="required" 
                     />
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary_don mb-3" type="submit"  onClick={Notification_Sucess}> <span class="ps-3">PAY </span> <span class="fas fa-arrow-right"></span> </button>
            </div>
        </div>
    </div>
    </form>
</div>
</div>


    )
    }
}


export default Donate