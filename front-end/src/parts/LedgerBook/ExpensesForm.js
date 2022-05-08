import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import {AddExpense} from "../../redux/actions/LedgerAction";

const ExpensesForm =() =>{

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const submit = (data) =>{
        var formData = new FormData();
        formData.append("expense", data.expense)
        formData.append("purpose", data.purpose)
        dispatch(AddExpense(data))
    }

    return(

            <div className="container mt-5">
                <div className="row d-flex justify-content-center align-items-center">

                    <div className="col-lg-6">
                        <div>

                                        
                            <form onSubmit={handleSubmit(submit)}>
                                <h1>Add a new expense to the ledger</h1>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Expense amount</label>
                                    <input {...register("expense",{required:true})} type="text" id="form2Example11" className="form-control"
                                                       placeholder="amount"/>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form2Example22">Expense purpose</label>
                                    <input {...register("purpose",{required:true})} name="purpose" id="purposeText" cols="30" rows="4"/>

                                </div>

                                <div className="text-center pt-1 mb-5 pb-1 d-flex justify-content-center align-items-center">
                                    <button
                                        className="btn btn-primary btn-block col-3"
                                        type="submit">Add Expense
                                    </button>

                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

    )
}

export default ExpensesForm;