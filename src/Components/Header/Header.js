import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='header mt-2 p-4'>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 text-blue-500 md:hidden">
                {
                    open ?
                        <XMarkIcon />

                        : <Bars3Icon />
                }
            </div>

            <div>

                <h3>Query Portal</h3>
            </div>
            <div className={`flex md:flex sm:flex  ${open ? 'top-6' : 'top-[-120px]'}`}>

                <NavLink to='/topics' className={({ isActive }) => isActive ? 'text-purple-600' : 'text-gray-700'}>Topics</NavLink>
                <NavLink to='/statistics' className={({ isActive }) => isActive ? 'text-purple-600' : 'text-gray-700'}>Statistics</NavLink>
                <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-purple-600' : 'text-gray-700'}>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;