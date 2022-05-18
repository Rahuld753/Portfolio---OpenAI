import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt">What is GPT?</a></p>
        <p><a href="#home">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className='template__navbar'>
            <div className='template__navbar-logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='template__navbar-links'>
                <div className='template__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='template__navbar-sign'>
                <p>Sign in</p>
                <button>Sign up</button>
            </div>
            <div className='template__navbar-menu'>
                {toggle ?
                    <RiCloseLine size={27} color="#fff" onClick={() => setToggle(false)} /> :
                    <RiMenu3Line size={27} color="#fff" onClick={() => setToggle(true)} />
                }
                {toggle &&
                    <div className='template__navbar-menu_container scale-up-center'>
                        <Menu />
                        <div className='template__navbar-menu_container-sign'>
                            <p>Sign in</p>
                            <button>Sign up</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar
