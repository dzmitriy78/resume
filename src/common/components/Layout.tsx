import React from 'react';
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import {Outlet} from "react-router-dom";

export const Layout: React.FC = () => {
    return (
        <>
            <Header/>
            <Outlet  />
            <Footer/>
        </>
    )
}