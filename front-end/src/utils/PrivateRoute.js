import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {// If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    const Auth = useSelector(state => state.Auth)

    return Auth.isConnected ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute