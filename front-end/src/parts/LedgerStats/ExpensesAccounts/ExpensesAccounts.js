import "./ExpensesAccounts.css";

export default function ExpensesAccounts ()
{
    const Button = ({type}) =>{
        return <button className={"WidgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="WidgetLgExpenses">

            <span className="WidgetLgTitleExpenses">Expenses Accounts</span>
            <table className="WidgetLgTable">
                <thead>
                <tr className="WidgetLgTr">

                    <th className="WidgetLgTh">Purpose</th>
                    <th className="WidgetLgTh">Amount</th>
                    <th className="WidgetLgTh">Date</th>

                </tr>
                </thead>

                <tbody>
                <tr className="WidgetLgTr">


                    <td className="WidgetLgProject">Software license purchase</td>

                    <td className="WidgetLgAmount">750 DT</td>

                    <td className="WidgetLgDate">2022-03-16</td>

                </tr>

                <tr className="WidgetLgTr">


                    <td className="WidgetLgProject">Repairs</td>

                    <td className="WidgetLgAmount">73 DT</td>

                    <td className="WidgetLgDate">2022-04-20</td>


                </tr>

                <tr className="WidgetLgTr">


                    <td className="WidgetLgProject">Outsourcing Design</td>

                    <td className="WidgetLgAmount">3000 DT</td>

                    <td className="WidgetLgDate">2022-04-19</td>


                </tr>

                <tr className="WidgetLgTr">

                    <td className="WidgetLgProject">Miscellaneous expenses</td>

                    <td className="WidgetLgAmount">300 DT</td>

                    <td className="WidgetLgDate">2022-04-06</td>


                </tr>
                </tbody>
            </table>
        </div>
    )
}