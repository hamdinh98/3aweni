import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import {AddIncome} from "../../redux/actions/LedgerAction";
import IncomesModal from "../../components/LedgerBook/IncomesModal";


const IncomeForm =() =>{
    const [useModal, setUseModal] = useState(false)
        const { register, handleSubmit, formState: { errors } } = useForm();
        const dispatch = useDispatch();
        const submit = (data) =>{
            var formData = new FormData();
            formData.append("amount", data.amount)
            formData.append("source", data.source)
            dispatch(AddIncome(data))
            console.log("income added")
        }

    return(

        <div className="container mt-5">
            <div className="row d-flex justify-content-center align-items-center">

                <div className="col-lg-6">
                    <div>
                        <form onSubmit={handleSubmit(submit)}>
                            <h1>Add a new income to the ledger</h1>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example11">Income amount</label>
                                <input type="text" {...register("amount",{required:true})} id="form2Example11" className="form-control"
                                       placeholder="amount"/>
                                {(errors.amount?.type) && <div class="alert alert-danger" role="alert">
                                    amount is required
                                </div>}
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example22">Income source</label>
                                <input {...register("source",{required:true})} name="source" id="purposeText" cols="30" rows="4"/>
                                {(errors.source?.type) && <div class="alert alert-danger" role="alert">
                                    source is required
                                </div>}
                            </div>

                            <div className="text-center pt-1 mb-5 pb-1 d-flex justify-content-center align-items-center">
                                <button onClick={()=>{setUseModal(true)}}
                                    className="btn btn-primary btn-block col-3"
                                    type="submit">Add Income</button>
                                {useModal && <IncomesModal closeModal={setUseModal}/>}
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default IncomeForm;
