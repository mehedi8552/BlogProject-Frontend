import React from 'react';
import { FaFacebook,FaInstagram,FaLinkedinIn,FaMailBulk,FaPhone } from "react-icons/fa";
import {NavLink} from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="footer p-10 pl-16 bg- text-base-content">
  <aside>
  <p className="my-14">
                {" "}
                <span className="text-2xl font-bold">Hello</span>{" "}
                <span className="text-2xl font-bold text-yellow-300">
                  World
                </span>{" "}
              </p>
  </aside> 
  <nav className='space-y-0'>
    <h6 className="footer-title text-black">Flow Us</h6> 
    <NavLink className='flex space-x-1 no-underline'><p className='pt-1'>< FaFacebook/></p> <p className=' text-black'>Facebook</p></NavLink>
    <NavLink className='flex space-x-1 no-underline'><p className='pt-1'>< FaInstagram/></p> <p className=' text-black'>Instagram</p></NavLink>
    <NavLink className='flex space-x-1 no-underline'><p className='pt-1'>< FaLinkedinIn/></p> <p className=' text-black'>LinkedIn</p></NavLink>
  </nav> 
  <nav>
    <h6 className="footer-title text-black">Contact Us</h6> 
    <NavLink className='flex space-x-1 no-underline'><p className='pt-1'><FaMailBulk/></p> <p className=' text-black'>mehedi193002106@gmail.com</p></NavLink>
    <NavLink className='flex space-x-1 no-underline'><p className='pt-1'><FaPhone/></p> <p className=' text-black'>+8801770228395</p></NavLink>
  </nav> 
</footer>
    );
};

export default Footer;