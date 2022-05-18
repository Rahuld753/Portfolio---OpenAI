import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div className='template__footer section__padding'>
            <div className='template__footer-heading'>
                <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
            </div>
            <div className='template__footer-btn'>
                <p>Request Early Access</p>
            </div>
            <div className='template__footer-container'>
                <div className='template__footer-container_logo'>
                    <img src={logo} alt="logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className='template__footer-container_links'>
                    <h1>Links</h1>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='template__footer-container_links'>
                    <h1>Company</h1>
                    <p>Terms &amp; Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='template__footer-container_links'>
                    <h1>Get in touch</h1>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
