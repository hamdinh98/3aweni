import React from 'react';

import './_next/static/css/44757726c5088dd2.css'
import TopMenu from "./parts/Header/TopMenu";
import SlideMenu from "./parts/Header/SlideMenu";
import {appendScript} from "./utils/appendScript";
import {removeScript} from "./utils/removeScript";
import Preloader from "./parts/Preloader/Preloader";
import Home from "./components/Home/Home";
import Footer from "./parts/Footer/Footer";
import {useEffect} from "react";

function Front(){
    useEffect(() => {
        const script = document.createElement('script');
        appendScript("_next/static/chunks/polyfills-5cd94c89d3acac5f.js")
        appendScript("_next/static/chunks/webpack-b927671265afed5e.js")
        appendScript("_next/static/chunks/framework-6e4ba497ae0c8a3f.js")
        appendScript("_next/static/chunks/pages/_app-8c1ff3e52017735c.js")
        appendScript("_next/static/chunks/262-476c915c85dcc4de.js")
        appendScript("_next/static/chunks/944-91bc38cfad525f70.js")
        appendScript("_next/static/chunks/964-3c9521e39d6572bb.js")
        appendScript("_next/static/chunks/pages/index-e9d4053e7e791665.js")
        appendScript("_next/static/OT3kE1mYzgwaSOo2wv4H3/_buildManifest.js")
        appendScript("_next/static/OT3kE1mYzgwaSOo2wv4H3/_middlewareManifest.js")
        appendScript("_next/static/OT3kE1mYzgwaSOo2wv4H3/_ssgManifest.js")

        return () => {
            document.body.removeChild(script);
        }
    }, []);


        return (

            <div id="__next">
                <TopMenu></TopMenu>
            </div>
        );

}



export default Front
