import logo from './logo.svg';
import './App.css';
import Front from "./modules/client-side/Front";
import Preloader from "./modules/client-side/parts/Preloader/Preloader";
import React from "react";
import TopMenu from "./modules/client-side/parts/Header/TopMenu";
import SlideMenu from "./modules/client-side/parts/Header/SlideMenu";
import Footer from "./modules/client-side/parts/Footer/Footer";
import Home from "./modules/client-side/components/Home/Home";

export default class App extends React.Component  {
    render() {
        return (
            <div>
                <Front/>
            </div>
        )
    }
}

