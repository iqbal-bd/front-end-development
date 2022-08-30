import React from 'react';
import { useLocation } from 'react-router-dom';


const Login = () => {
    let location = useLocation();
    console.log(location)
    return (
        <div>
            <h3>Login page</h3>
            <h1>{location.state.user}</h1>
        </div>
    );
};

export default Login;