import React from 'react';
import { Route,useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
    const navigate=useNavigate()
    const user = localStorage.getItem('user');
    return (
        <Route
            {...rest}
            render={() => user ? element : navigate("/")}
        />
    );
};

export default PrivateRoute;
