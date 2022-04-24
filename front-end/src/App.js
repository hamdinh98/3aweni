import './App.css';

import React, { useEffect } from "react";
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
import Test from './pages/test';
import PrivateRoute from './utils/PrivateRoute';
import { useSelector, useDispatch } from 'react-redux';
import { setConnected } from "./redux/actions/AuthActions"

export default function App() {
    const Auth = useSelector(state => state.Auth)
    const dispatch = useDispatch()
    useEffect(() => {

        localStorage.getItem('authTokens') && !Auth.isConnected && dispatch(setConnected()) && console.log("test APP");
    }, [])
    console.log(Auth.isConnected);

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
                <Route path='/Donate' element={<Donate />} />
                <Route exact path='/' element={<PrivateRoute />}>
                    <Route path='/Dashboard/*' element={<Dashboard />} />
                </Route>
                <Route path='/test' element={<Test />} />
                <Route exact path='/' element={<PrivateRoute />}>
                </Route>
                <Route path='*' element={<NotFound404 />} />

            </Routes>
            {/*<Footer />*/}
        </BrowserRouter>
    )
}