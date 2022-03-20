
import './App.css';

import React from "react";
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Header from './parts/Home/Header';
import Footer from './parts/Home/Footer';
import ProjectCard from './parts/ProjectsList/ProjectCard';
import ProjectsList from './pages/ProjectsList';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Registration from './pages/Registration';



export default class App extends React.Component {
    render() {
        return (
            <div>

                {/* <ProjectDetails /> */}
                {/* <Home /> */}
                {/* <AboutUs /> */}

                <ProjectsList />
                {/* <Login /> */}
                {/* <Registration /> */}

            </div>
        )
    }
}

