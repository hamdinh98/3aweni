import "./WidgetSmExample.css"
import {Preview} from "@mui/icons-material"
export default function WidgetSmExample ()
{
    return (
        <div className="WidgetSmExample">
            <span className="WidgetSmTitle">New Users</span>
            <ul className="WidgetSmListe">
                <li className="WidgetSmItem">
                    <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetSmImage"/>
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUsername">Saifeddine Houji</span>
                        <span className="WidgetSmJob">Software engineer</span>
                    </div>
                    <button className="WidgetSmButton">
                        <Preview className="WidgetSmIcon"/> Check Profile
                    </button>
                </li>

                <li className="WidgetSmItem">
                    <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetSmImage"/>
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUsername">Saifeddine Houji</span>
                        <span className="WidgetSmJob">Software engineer</span>
                    </div>
                    <button className="WidgetSmButton">
                        <Preview className="WidgetSmIcon"/> Check Profile
                    </button>
                </li>

                <li className="WidgetSmItem">
                    <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetSmImage"/>
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUsername">Saifeddine Houji</span>
                        <span className="WidgetSmJob">Software engineer</span>
                    </div>
                    <button className="WidgetSmButton">
                        <Preview className="WidgetSmIcon"/> Check Profile
                    </button>
                </li>
            </ul>
        </div>
    )
}