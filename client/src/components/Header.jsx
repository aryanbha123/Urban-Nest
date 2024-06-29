import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import Logo from '../assets/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { CloseRounded, MenuRounded } from '@mui/icons-material'
export default function Header() {
    const [fixed, setFixed] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`flex border-b-2 shadow justify-between items-center bg-white ${fixed ? 'nav-fixed' : ''}`} style={{ background: "", color: "" }}>
            <div className="logo flex justify-center" style={{ width: "", height: "auto", background: "" }}>
                <img height={"100px"} width={"100px"} src={Logo} alt="" />
            </div>
            <div className="navitems-lg flex gap-8 flex-1 justify-end pr-5 ">
                <Link className='hover:text-sky-900'><li>Home</li></Link>
                <Link className='hover:text-sky-900'><li>About</li></Link>
                <Link className='hover:text-sky-900'><li>Services</li></Link>
                <Link className='hover:text-sky-900'><li>Brouchers</li></Link>
                <Link className='hover:text-sky-900'><li>Contact</li></Link>
            </div>
            <div className="hamBtn">
                <IconButton color='inherit' onClick={() => setShow(true)}>
                    <MenuRounded />
                </IconButton>
            </div>
            <div className={`navitems-sm  ${show ?'showNav' : ''}`}>
                <IconButton onClick={() => setShow(false)}>
                    <CloseRounded/>
                </IconButton>
                <Link onClick={() => setShow(false)} to={"/"}><li>Home</li></Link>
                <Link onClick={() => setShow(false)} to={"/"}><li>About</li></Link>
                <Link onClick={() => setShow(false)} to={"/"}><li>Services</li></Link>
                <Link onClick={() => setShow(false)} to={"/"}><li>Brouchers</li></Link>
                <Link onClick={() => setShow(false)} to={"/"}><li>Contact</li></Link>
            </div>

        </nav>
    )
}
