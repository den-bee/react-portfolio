import React from 'react';
import {Outlet} from "react-router-dom";
import logo from './logo.svg';

const Content = () => {
    return (
        <main>
            <Outlet/>
        </main>
        
    )
}

export default Content;