import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
        <nav className='navFooter'>
            <ul className='redFooter' >
                <a href="https://www.facebook.com" className='red facebook'  target="_blank" >
                   <BsFacebook />
                </a>
                <a href="https://www.instagram.com"  className='red instagram'target="_blank" >
                  <AiFillInstagram />
                </a>
                <a href="https://www.twitter.com" className='red twitter' target="_blank">
                  <FaTwitter />
                </a>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer