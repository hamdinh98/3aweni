import './App.css';

import React from "react";
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import ProjectsList from './pages/ProjectsList';
import AboutUs from './pages/AboutUs';
import Donate from './pages/Donate/Donate';
import Login from './pages/Login';
import Registration from './pages/Registration';
import NotFound404 from './pages/NotFound404';
import LedgerBook from './pages/LedgerBook';
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute';

import PublicRouteHandler from './utils/PublicRouteHandler';
import Profile from './pages/profile/Profile';
import LedgerStats from "./pages/LedgerStats";
import BackerList from './parts/ProjectDetails/BackerList';
import Comments_List from './parts/Commentaire/Comments_List';

export default function App() {


    return (
        <BrowserRouter>
            {/*<Header />*/}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/Registration' element={<Registration />} />
                <Route path='/login' element={<Login />} />
                <Route path='/projectDetails/*' element={<ProjectDetails />} />
                <Route path='/ProjectsList' element={<ProjectsList />} />
                <Route path='/LedgerBook' element={<LedgerBook />} />
                <Route path='/LedgerStats' element={<LedgerStats />} />
                <Route path='/Donate' element={<Donate />} />
                <Route exact path='/' element={<PrivateRoute />} />

                <Route exact path='/' element={<PublicRouteHandler />} >
                    <Route path='/Registration' element={<Registration />} />
                    <Route path='/login' element={<Login />} />
                </Route>

                  // hotou fi wost route hedi les routes eli yetaalbou andou user ykoun connecté bech yaccedilhom
                <Route exact path='/' element={<PrivateRoute />} >
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/projectDetails/*' element={<ProjectDetails />} />
                    <Route path='/ProjectsList' element={<ProjectsList />} />
                    <Route path='/LedgerBook' element={<LedgerBook />} />
                    <Route path='/LedgerStats' element={<LedgerStats />} />
                    <Route path='/Dashboard/*' element={<Dashboard />} />
                </Route>


                <Route path='*' element={<NotFound404 />} />
            </Routes>
            {/*<Footer />*/}
        </BrowserRouter>
    )
}