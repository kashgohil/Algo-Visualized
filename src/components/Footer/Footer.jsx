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
                <a href="https://www.linkedin.com/in/kashyap-gohil-5190a7128/"><FaLinkedin className="social" /></a>
                <a href="https://github.com/kashgohil"><FaGithub className="social" /></a>
                <a href="https://twitter.com/kashgohil99"><FaTwitter className="social" /></a>
            </div>
        </div>
    )
}

export default Footer