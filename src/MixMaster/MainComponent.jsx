import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from './components/NavBar';

const MainComponent = () => {
    const navigate = useNavigation();
    const isLoading = navigate.state === "loading";
    const value = "some calu";
    return (
        <>
        <Navbar />
        <section className='page'>
            {isLoading ? <div className='loading'/> : <Outlet context={{value}}/>}
        </section>
        </>
    );
}
 
export default MainComponent;