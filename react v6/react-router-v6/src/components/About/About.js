import React from 'react';
import { Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h3>This is About page</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default About;