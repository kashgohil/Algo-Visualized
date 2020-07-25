import React from 'react'
import {FaTwitter,FaLinkedin,FaGithub} from 'react-icons/fa'
import './footer.scss'

const Footer = () => {
    return (
        <div className="footer-container">
            <div>
                Developed By Kashyap Gohil
            </div>
            <div className="social-links">
                <FaLinkedin className="social" />
                <FaGithub className="social" />
                <FaTwitter className="social" />
            </div>
        </div>
    )
}

export default Footer