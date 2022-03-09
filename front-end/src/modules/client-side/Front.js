import React from 'react';

import './assets/css/bootstrap.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/animate.css'
import './assets/css/magnific-popup.css'
import './assets/css/all.min.css'
import './assets/css/flaticon.css'
import './assets/css/font.css'
import './assets/css/themify-icons.css'
import './assets/css/metisMenu.css'
import './assets/css/nice-select.css'
import './assets/css/slick.css'
import './assets/css/main.css'
import TopMenu from "./parts/Header/TopMenu";
import SlideMenu from "./parts/Header/SlideMenu";
import {appendScript} from "./utils/appendScript";
import {removeScript} from "./utils/removeScript";
import Preloader from "./parts/Preloader/Preloader";
import Home from "./components/Home/Home";
import Footer from "./parts/Footer/Footer";

class Front extends React.Component{
    constructor(props) {
        super(props);
        this.render()
        // Initializing the state
    }


    componentDidMount () {

        appendScript("assets/js/vendor/modernizr-3.5.0.min.js")
        appendScript("assets/js/vendor/jquery-1.12.4.min.js")
        appendScript("assets/js/popper.min.js")
        appendScript("assets/js/bootstrap.min.js")
        appendScript("assets/js/owl.carousel.min.js")
        appendScript("assets/js/isotope.pkgd.min.js")
        appendScript("assets/js/slick.min.js")
        appendScript("assets/js/jquery.meanmenu.min.js")
        appendScript("assets/js/metisMenu.min.js")
        appendScript("assets/js/jquery.nice-select.js")
        appendScript("assets/js/ajax-form.js")
        appendScript("assets/js/wow.min.js")
        appendScript("assets/js/jquery.counterup.min.js")
        appendScript("assets/js/waypoints.min.js")
        appendScript("assets/js/jquery.scrollUp.min.js")
        appendScript("assets/js/imagesloaded.pkgd.min.js")
        appendScript("assets/js/jquery.magnific-popup.min.js")
        appendScript("assets/js/jquery.easypiechart.js")
        appendScript("assets/js/tilt.jquery.js")
        appendScript("assets/js/plugins.js")
        appendScript("assets/js/main.js")
    }

    componentDidUnmount () {

        removeScript("assets/js/vendor/modernizr-3.5.0.min.js")
        removeScript("assets/js/vendor/jquery-1.12.4.min.js")
        removeScript("assets/js/popper.min.js")
        removeScript("assets/js/bootstrap.min.js")
        removeScript("assets/js/owl.carousel.min.js")
        removeScript("assets/js/isotope.pkgd.min.js")
        removeScript("assets/js/slick.min.js")
        removeScript("assets/js/jquery.meanmenu.min.js")
        removeScript("assets/js/metisMenu.min.js")
        removeScript("assets/js/jquery.nice-select.js")
        removeScript("assets/js/ajax-form.js")
        removeScript("assets/js/wow.min.js")
        removeScript("assets/js/jquery.counterup.min.js")
        removeScript("assets/js/waypoints.min.js")
        removeScript("assets/js/jquery.scrollUp.min.js")
        removeScript("assets/js/imagesloaded.pkgd.min.js")
        removeScript("assets/js/jquery.magnific-popup.min.js")
        removeScript("assets/js/jquery.easypiechart.js")
        removeScript("assets/js/tilt.jquery.js")
        removeScript("assets/js/plugins.js")
        removeScript("assets/js/main.js")
    }
    render() {
        return (
            <div className="component-front">
                <Preloader></Preloader>
                <TopMenu></TopMenu>
                <SlideMenu></SlideMenu>
                <div className="body-overlay"></div>
            </div>
        );


    }

}



export default Front
