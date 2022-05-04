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
                    <th className="WidgetLgTh">Project</th>
                    <th className="WidgetLgTh">Amount</th>
                    <th className="WidgetLgTh">Date</th>
                    <th className="WidgetLgTh">Status</th>
                </tr>
                </thead>

                <tbody>
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUserColumn">
                        <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetLgImage"/>
                        <span className="WidgetLgUsername">Hàmdi Nahdi</span>
                    </td>

                    <td className="WidgetLgProject">Vr Goggles</td>

                    <td className="WidgetLgAmount">1200DT</td>

                    <td className="WidgetLgDate">13 jan 2022</td>

                    <td className="WidgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>

                <tr className="WidgetLgTr">
                    <td className="WidgetLgUserColumn">
                        <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetLgImage"/>
                        <span className="WidgetLgUsername">Hàmdi Nahdi</span>
                    </td>

                    <td className="WidgetLgProject">Vr Goggles</td>

                    <td className="WidgetLgAmount">1200DT</td>

                    <td className="WidgetLgDate">13 jan 2022</td>

                    <td className="WidgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>

                <tr className="WidgetLgTr">
                    <td className="WidgetLgUserColumn">
                        <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetLgImage"/>
                        <span className="WidgetLgUsername">Hàmdi Nahdi</span>
                    </td>

                    <td className="WidgetLgProject">Vr Goggles</td>

                    <td className="WidgetLgAmount">1200DT</td>

                    <td className="WidgetLgDate">13 jan 2022</td>

                    <td className="WidgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>

                <tr className="WidgetLgTr">
                    <td className="WidgetLgUserColumn">
                        <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetLgImage"/>
                        <span className="WidgetLgUsername">Hàmdi Nahdi</span>
                    </td>

                    <td className="WidgetLgProject">Vr Goggles</td>

                    <td className="WidgetLgAmount">1200DT</td>

                    <td className="WidgetLgDate">13 jan 2022</td>

                    <td className="WidgetLgStatus">
                        <Button type="Declined"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}