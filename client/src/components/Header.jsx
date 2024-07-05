import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';
import { Link as RLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { IconButton } from '@mui/material';
import { CloseRounded, MenuRounded } from '@mui/icons-material';

export default function Header() {
    const [fixed, setFixed] = useState(false);
    const [show, setShow] = useState(false);
    const navRef = useRef();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setFixed(window.scrollY > 0);
        };

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const isHome = location.pathname === '/';

    return (
        <>
            <div id="top"></div>
            <nav id="header" className={`flex border-b-2 shadow justify-between items-center bg-white ${fixed ? 'nav-fixed' : ''}`} ref={navRef}>
                <div className="logo flex justify-center" style={{ width: "100px", height: "auto" }}>
                    <img height={"100px"} width={"100px"} src={logo} alt="Logo" />
                </div>
                <div className="navitems-lg flex gap-8 flex-1 justify-end pr-5">
                    {isHome ? (
                        <>
                            <Link smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='hover:text-sky-900'><li>Home</li></Link>
                            <Link smooth={true} duration={500} style={{ cursor: "pointer" }} to="about" className='hover:text-sky-900'><li>About</li></Link>
                            <Link smooth={true} duration={500} style={{ cursor: "pointer" }} to="services" className='hover:text-sky-900'><li>Services</li></Link>
                            <Link smooth={true} duration={500} style={{ cursor: "pointer" }} to="contact" className='hover:text-sky-900'><li>Contact</li></Link>
                        </>
                    ) : (
                        <>
                            <RLink to="/" style={{ cursor: "pointer" }} className='hover:text-sky-900'><li>Home</li></RLink>
                            <RLink to="/about" style={{ cursor: "pointer" }} className='hover:text-sky-900'><li>About</li></RLink>
                            <RLink to="/services" style={{ cursor: "pointer" }} className='hover:text-sky-900'><li>Services</li></RLink>
                            <RLink to="/contact" style={{ cursor: "pointer" }} className='hover:text-sky-900'><li>Contact</li></RLink>
                        </>
                    )}
                    <RLink to="/properties" style={{ cursor: "pointer" }} className='hover:text-sky-900'><li>Properties</li></RLink>
                </div>
                <div className="hamBtn">
                    <IconButton color='inherit' onClick={() => setShow(true)}>
                        <MenuRounded />
                    </IconButton>
                </div>
                <div className={`navitems-sm gap-4 ${show ? 'showNav' : ''}`}>
                    <IconButton onClick={() => setShow(false)}>
                        <CloseRounded />
                    </IconButton>
                    {isHome ? (
                        <>
                            <Link className='px-7 py-2' smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                setShow(false);
                            }}><li>Home</li></Link>
                            <Link className='px-7 py-2' smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={() => setShow(false)} to="about"><li>About</li></Link>
                            <Link className='px-7 py-2' smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={() => setShow(false)} to="services"><li>Services</li></Link>
                            <Link className='px-7 py-2' smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={() => setShow(false)} to="contact"><li>Contact</li></Link>
                        </>
                    ) : (
                        <>
                            <RLink className='px-7 py-2' to="/" style={{ cursor: "pointer" }} onClick={() => setShow(false)}><li>Home</li></RLink>
                            <RLink className='px-7 py-2' to="/about" style={{ cursor: "pointer" }} onClick={() => setShow(false)}><li>About</li></RLink>
                            <RLink className='px-7 py-2' to="/services" style={{ cursor: "pointer" }} onClick={() => setShow(false)}><li>Services</li></RLink>
                            <RLink className='px-7 py-2' to="/contact" style={{ cursor: "pointer" }} onClick={() => setShow(false)}><li>Contact</li></RLink>
                        </>
                    )}
                    <RLink className='px-7 py-2 text-white rounded' to="/properties" style={{ cursor: "pointer", background: "#1976d2" }} onClick={() => setShow(false)}><li>Properties</li></RLink>
                </div>
            </nav>
        </>
    );
}
