import React, { useState } from "react";
import Footer from "../parts/Home/Footer";
import Header from "../parts/Home/Header";
import ExpensesForm from "../parts/LedgerBook/ExpensesForm";
import IncomeForm from "../parts/LedgerBook/IncomeForm";



const LedgerBook = () => {
  const [show, setShow] = useState(0)


  return (
    <div>
      <Header />
      <div className="d-flex justify-content-around">
        <button className="btn btn-primary" onClick={() => setShow(0)}>Expenses form</button>
        <button className="btn btn-success" onClick={() => setShow(1)}>Show ledger</button>
        <button className="btn btn-primary" onClick={() => setShow(2)}>Incomes form</button>
      </div>

      {show === 0 && <ExpensesForm />}
      {show === 2 && <IncomeForm />}
      {show === 1 && <h1>Ledger book</h1>}


      <Footer />
    </div>
  )
}

export default LedgerBook;