import React, {useState} from "react";
import ExpensesForm from "../parts/LedgerBook/ExpensesForm";
import IncomeForm from "../parts/LedgerBook/IncomeForm";



const LedgerBook = () =>{
    const [showExpense, showIncome, ShowLedger] = useState(false);


    return(
        <div>

          <div className="d-flex justify-content-around">
              <button className="btn btn-primary">Expenses form</button>
              <button className="btn btn-success">Show ledger</button>
              <button className="btn btn-primary">Incomes form</button>
            </div>

            <ExpensesForm/>

            <IncomeForm/>

        </div>
)
}

export default LedgerBook;