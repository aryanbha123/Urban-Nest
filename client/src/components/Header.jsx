import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import Logo from '../assets/logo.png'
import './Header.css'
import {Link as RLink} from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll';
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
        <>
            <div id=""></div>
            <nav id='' className={`flex border-b-2 shadow justify-between items-center bg-white ${fixed ? 'nav-fixed' : ''}`} style={{ background: "", color: "" }}>
                <div className="logo flex justify-center" style={{ width: "", height: "auto", background: "" }}>
                    <img height={"100px"} width={"100px"} src={Logo} alt="" />
                </div>
                <div className="navitems-lg flex gap-8 flex-1 justify-end pr-5 ">
                    <Link smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='hover:text-sky-900'><li>Home</li></Link>
                    <Link smooth={true} duration={500} style={{ cursor: "pointer" }} to={"about"} className='hover:text-sky-900'><li>About</li></Link>
                    <Link smooth={true} duration={500} style={{ cursor: "pointer" }} to='services' className='hover:text-sky-900'><li>Services</li></Link>
                    <RLink smooth={true} duration={500} style={{ cursor: "pointer" }} to='/properties' className='hover:text-sky-900'><li>Properties</li></RLink>
                    <Link smooth={true} duration={500} style={{ cursor: "pointer" }} to='contact' className='hover:text-sky-900'><li>Contact</li></Link>
                </div>
                <div className="hamBtn">
                    <IconButton color='inherit' onClick={() => setShow(true)}>
                        <MenuRounded />
                    </IconButton>
                </div>
                <div className={`navitems-sm  ${show ? 'showNav' : ''}`}>
                    <IconButton onClick={() => setShow(false)}>
                        <CloseRounded />
                    </IconButton>
                    <Link smooth={true} duration={500} style={{ cursor: "pointer" }}  onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            setShow(false);
                        }} ><li>Home</li></Link>
                    <Link smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={() => setShow(false)} to={"about"}><li>About</li></Link>
                    <Link smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={() => setShow(false)} to={"services"}><li>Services</li></Link>
                    <RLink smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={() => setShow(false)} to={"/properties"}><li>Properties</li></RLink>
                    <Link smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={() => setShow(false)} to="contact"><li>Contact</li></Link>
                </div>

            </nav>
        </>
    )
}
