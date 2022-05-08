import React from "react";
import "./Modal.css"

export default function IncomesModal ({closeModal})
{
    return (
        <div className="modalBackground">
            <div className="modalContainers">
                <div className="titleCloseBtn">
                    <button onClick={()=>{closeModal(false)}}>X</button>
                </div>

                <div className="modalTitle">
                    <h1>Success !</h1>
                </div>
                <div className="modalBody">
                    <p>The income has been successfully added to the ledger !</p>
                </div>
                <div className="modalFooter">
                    <button id="cancelBtn" onClick={()=>{closeModal(false)}}>Close</button>
                </div>
            </div>
        </div>
    )
}