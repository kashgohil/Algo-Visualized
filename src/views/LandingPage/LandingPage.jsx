import React from 'react'
import ParticlesBg from 'particles-bg'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import './landingpage.scss'


const Content = () => {
    return (
        <div className="content-container">
            <span className="title">Algo Visualised</span>
            <span className="subtitle">place to learn algorithms easily...</span>
            <button className="button">Go to algorithms</button>
        </div>
    )
}

const LandingPage = () => {
    return (
        <div id="particles-js" className="landing-page-container">
            <Header />
            <Content />
            <Footer />         
            <ParticlesBg type="cobweb" num={window.innerWidth/10} background color="#4f30b3" bg={true} />
        </div>
    )
}

export default LandingPage