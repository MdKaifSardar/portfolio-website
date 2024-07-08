import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/navbar.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
    useGSAP(() => {
        gsap.fromTo('#navItems', {
            opacity: 0,
            padding: 0,
            stagger: 1,
        },
        {
            opacity: 1,
            padding: 8,
            ease: 'bounce.out',
            delay: 3,
        })
        gsap.fromTo('#navEle', {
            opacity: 0,
        },
        {
            delay: 3,
            opacity: 1,
            stagger: 1,
            duration: 1,
            ease: 'back.inOut'
        })
    })
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        setIsOpen(!isOpen);
    }
  return (
    <header className='header'>
        <NavLink id='navItems' to="/" className="w-fit h-fit p-2 rounded-full bg-white items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>MKS</p>
        </NavLink>
        <div className='flex flex-row items-center'>
            <nav id='navItems' className='real_nav'>
                <NavLink id='navEle' to='/about' className={({isActive}) => isActive?'text-blue-500':'text-black-500'}>
                    About
                </NavLink>
                <NavLink id='navEle' to='/projects' className={({isActive}) => isActive?'text-blue-500':'text-black-500'}>
                    Projects
                </NavLink>
                <NavLink id='navEle' to='/contact' className={({isActive}) => isActive?'text-blue-500':'text-black-500'}>
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
