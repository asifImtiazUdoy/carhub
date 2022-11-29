import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../../pages/Common/Loading';
import useUser from '../../Hooks/useUser';

const AdminRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [currentUser, userLoading] = useUser(user?.email); 
    const location = useLocation();
    
    if (loading || userLoading) {
        return <Loading></Loading>
    }

    if (currentUser.type === "Admin") {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;