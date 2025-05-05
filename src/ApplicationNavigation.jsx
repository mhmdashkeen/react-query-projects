import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Wrapper from './MixMaster/assets/wrappers/NavBarPage';

const ApplicationNavigation = () => {
    return (
    <>
        <Wrapper>
        <div className='nav-center'>
            <Link to="/" className='logo'>Application Nav</Link>
            <div className='nav-links'>
            <NavLink to='/mix-master' className='nav-link'>
                MixMaster
            </NavLink>
            <NavLink to='/' className='nav-link'>
                Todo
            </NavLink>
            </div>
        </div>
        </Wrapper>
        <Outlet />
    </>
    );
}
 
export default ApplicationNavigation;