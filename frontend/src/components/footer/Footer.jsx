import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p className='footer-descriptions'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vitae cum voluptatem praesentium laboriosam quis veniam sequi dignissimos ratione dolores beatae doloremque, molestias, nulla commodi eos at voluptate nam! Magni est necessitatibus, incidunt veniam amet laboriosam nulla provident perspiciatis quod cumque ex perferendis tempore! Dolores officiis perspiciatis qui soluta voluptates?</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+123-456-789</li>
                        <li>contact@gmail.com</li>
                    </ul>
                </div> 
                
            </div>
            <div className='footer-copyright'>
                    <p>Copyright 2025 tommato.com . All Right Reserved</p>
                </div>

        </div>
    )
}

export default Footer