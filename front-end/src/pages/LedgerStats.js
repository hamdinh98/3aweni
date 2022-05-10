import React, { useState } from "react";
import Footer from "../parts/Home/Footer";
import Header from "../parts/Home/Header";
import IncomeAccounts from "../parts/LedgerStats/IncomeAccounts/IncomeAccounts";
import ExpensesAccounts from "../parts/LedgerStats/ExpensesAccounts/ExpensesAccounts";
import Contributors from "../parts/LedgerStats/Contributors/Contributors";
import {Link} from "react-router-dom";


const LedgerStats = ()=>{
    const [show, setShow] = useState(0)


    return (
        <div>
            <Header />
            <div className="d-flex justify-content-around">
                <button className="btn btn-primary" onClick={() => setShow(0)}>Incomes Accounts</button>
                <button className="btn btn-success" onClick={() => setShow(1)}>Contributors</button>
                <button className="btn btn-primary" onClick={() => setShow(2)}>Expenses Accounts</button>
                <button className="btn btn-primary" >
                    <Link style={{"color":"white"}} to="/LedgerBook">Add entries</Link>
                </button>
            </div>

            {show === 0 && <IncomeAccounts/> }
            {show === 2 && <ExpensesAccounts/> }
            {show === 1 && <Contributors/> }


            <Footer />
        </div>
    )
}

export default LedgerStats;