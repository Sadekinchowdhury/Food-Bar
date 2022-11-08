import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../Context/AuthProvider';


const PrivetRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Spinner animation="border" role="status"></Spinner>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivetRout;