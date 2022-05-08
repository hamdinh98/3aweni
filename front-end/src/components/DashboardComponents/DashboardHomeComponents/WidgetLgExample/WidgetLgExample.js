import "./WidgetLgExample.css"

export default function WidgetLgExample ()
{
    const Button = ({type}) =>{
        return <button className={"WidgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="WidgetLgExample">
            <span className="WidgetLgTitle">Latest project requests</span>
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

                        <td className="WidgetLgProject">School renovation</td>

                        <td className="WidgetLgAmount">8000 DT</td>

                        <td className="WidgetLgDate">2022-03-28</td>

                        <td className="WidgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>

                    <tr className="WidgetLgTr">
                        <td className="WidgetLgUserColumn">
                            <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetLgImage"/>
                            <span className="WidgetLgUsername">Saifeddine Houji</span>
                        </td>

                        <td className="WidgetLgProject">Video Game : City Manager</td>

                        <td className="WidgetLgAmount">50000 DT</td>

                        <td className="WidgetLgDate">2022-03-16</td>

                        <td className="WidgetLgStatus">
                            <Button type="Pending"/>
                        </td>
                    </tr>

                    <tr className="WidgetLgTr">
                        <td className="WidgetLgUserColumn">
                            <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetLgImage"/>
                            <span className="WidgetLgUsername">Tarek Zaafrane</span>
                        </td>

                        <td className="WidgetLgProject">Vr Goggles</td>

                        <td className="WidgetLgAmount">6000 DT</td>

                        <td className="WidgetLgDate">2022-02-24</td>

                        <td className="WidgetLgStatus">
                            <Button type="Declined"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}