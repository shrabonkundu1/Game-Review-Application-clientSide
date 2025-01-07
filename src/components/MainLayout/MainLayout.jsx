import React from 'react';
// import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from './Header';


const MainLayout = () => {
    return (
        <header className=' md:max-w-screen-2xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </header>
    );
};

export default MainLayout;