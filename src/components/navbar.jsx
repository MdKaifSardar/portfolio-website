import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        setIsOpen(!isOpen);
    }
  return (
    <header className='header'>
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>MKS</p>
        </NavLink>
        <div className='flex flex-row items-center'>
            <nav className='real_nav'>
                <NavLink to='/about' className={({isActive}) => isActive?'text-blue-500':'text-black-500'}>
                    About
                </NavLink>
                <NavLink to='/projects' className={({isActive}) => isActive?'text-blue-500':'text-black-500'}>
                    Projects
                </NavLink>
                <NavLink to='/contact' className={({isActive}) => isActive?'text-blue-500':'text-black-500'}>
                    Contact
                </NavLink>
            </nav>

            <nav className='navbar_item_list'>
                <div className={`${isOpen?'nav_list_open':'nav_list_closed'}`}>
                    <NavLink to='/about' className={({isActive}) => isActive?'text-blue-500':'text-black-500'}>
                        About
                    </NavLink>
                    <NavLink to='/projects' className={({isActive}) => isActive?'text-blue-500':'text-black-500'}>
                        Projects
                    </NavLink>
                    <NavLink to='/contact' className={({isActive}) => isActive?'text-blue-500':'text-black-500'}>
                        Contact
                    </NavLink>
                </div>
                <div onClick={handleOnClick} className='flex justify-center items-center rounded-2xl p-2 nav_item_list_icon'>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </div>
    </header> 
  )
}

export default Navbar;
