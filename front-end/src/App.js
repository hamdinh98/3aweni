
import './App.css';

import React from "react";
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Header from './parts/Home/Header';
import Footer from './parts/Home/Footer';
import ProjectsList from './pages/ProjectsList';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Registration from './pages/Registration';
import NotFound404 from './pages/NotFound404';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';

export default function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/login' element={<Login />} />
                <Route path='/projectDetails/*' element={<ProjectDetails />} />
                <Route path='/ProjectsList' element={<ProjectsList />} />
                <Route path='/Registration' element={<Registration />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='*' element={<NotFound404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}


