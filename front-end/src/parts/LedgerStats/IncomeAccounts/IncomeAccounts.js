import "./IncomeAccounts.css"

export default function IncomeAccounts()
{
    const Button = ({type}) =>{
        return <button className={"WidgetLgButton " + type}>{type}</button>
    }
    return (

        <div className="WidgetLgAccounts">
            <span className="WidgetLgTitle">Incomes Accounts</span>
            <table className="WidgetLgTable">
                <thead>
                <tr className="WidgetLgTr">
                    <th className="WidgetLgTh">User</th>
                    <th className="WidgetLgTh">Type</th>
                    <th className="WidgetLgTh">Amount</th>
                    <th className="WidgetLgTh">Date</th>

                </tr>
                </thead>

                <tbody>
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUserColumn">
                        <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetLgImage"/>
                        <span className="WidgetLgUsername">Saif Houjji</span>
                    </td>

                    <td className="WidgetLgProject">Donation</td>

                    <td className="WidgetLgAmount">250 DT</td>

                    <td className="WidgetLgDate">2022-04-06</td>


                </tr>

                <tr className="WidgetLgTr">
                    <td className="WidgetLgUserColumn">
                        <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetLgImage"/>
                        <span className="WidgetLgUsername">External User</span>
                    </td>

                    <td className="WidgetLgProject">equipment</td>

                    <td className="WidgetLgAmount">12000 DT</td>

                    <td className="WidgetLgDate">2022-03-18</td>


                </tr>

                <tr className="WidgetLgTr">
                    <td className="WidgetLgUserColumn">
                        <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetLgImage"/>
                        <span className="WidgetLgUsername">External User</span>
                    </td>

                    <td className="WidgetLgProject">Materials</td>

                    <td className="WidgetLgAmount">4886 DT</td>

                    <td className="WidgetLgDate">2022-02-27</td>


                </tr>

                <tr className="WidgetLgTr">
                    <td className="WidgetLgUserColumn">
                        <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetLgImage"/>
                        <span className="WidgetLgUsername">External User</span>
                    </td>

                    <td className="WidgetLgProject">Cash</td>

                    <td className="WidgetLgAmount">800DT</td>

                    <td className="WidgetLgDate">2022-04-01</td>


                </tr>
                </tbody>
            </table>
        </div>
    )
}