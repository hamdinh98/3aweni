

const ExpensesForm =() =>{
    return(

            <div className="container mt-5">
                <div className="row d-flex justify-content-center align-items-center">

                    <div className="col-lg-6">
                        <div>

                                        
                            <form>
                                <h1>Add a new expense to the ledger</h1>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Expense amount</label>
                                    <input type="text" id="form2Example11" className="form-control"
                                                       placeholder="amount"/>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form2Example22">Expense purpose</label>
                                    <textarea name="purpose" id="purposeText" cols="30" rows="4"></textarea>

                                </div>

                                <div className="text-center pt-1 mb-5 pb-1 d-flex justify-content-center align-items-center">
                                    <button
                                        className="btn btn-primary btn-block fa-lg gradient-custom-1 mb-3 col-3"
                                        type="button">Add Expense
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