import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext';



const PrivateRoute = ({ component: Component, ...rest }) => {
    const context = useContext(AuthContext);
    return (
    <Route {...rest} render={(props) => (
        context.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />)
    };

export default PrivateRoute;