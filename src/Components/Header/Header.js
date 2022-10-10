import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>

            <div>
                <h3>Query Portal</h3>
            </div>
            <div>
                <NavLink to='/topics'>Topics</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;