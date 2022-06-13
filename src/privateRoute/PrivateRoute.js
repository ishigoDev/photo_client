import React from 'react';
import {Navigate} from 'react-router-dom';
import {getToken} from '../middleware/middleware';
export const PrivateRoute = ({children}) =>{    
    return getToken() !== null ? children : <Navigate to="/admin-access" />
};
export const LogRoute = ({children}) =>{
    return getToken() === null ? children : <Navigate to="/admin-dashboard" />
};
