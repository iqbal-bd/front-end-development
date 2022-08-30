import React from 'react';
import { useLocation } from 'react-router-dom';


const Logout = () => {
    let location = useLocation();
    return (
        <div>
            <h2>This is log out page</h2>
            <h2>{location.state.name}</h2>
        </div>
    );
};

export default Logout;