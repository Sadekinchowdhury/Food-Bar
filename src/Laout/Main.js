import React from 'react';
import { Outlet } from 'react-router';
import Headers from '../Pages/Headers/Headers';
import Footer from '../Pages/Home/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;