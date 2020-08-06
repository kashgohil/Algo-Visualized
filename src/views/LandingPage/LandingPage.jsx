import React, {useState} from 'react'
import ParticlesBg from 'particles-bg'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import {Link} from 'react-router-dom'
import './landingpage.scss'


const Content = () => {

    const [layout,setLayout] = useState("Intro")

    const gotoAlgos = () => {
        setLayout("algo")
    }

    return (
        <div className="content-container flex-center">   
            {layout === "Intro"
                ?
                <div className="intro flex-center">
                    <span className="title">Algo Visualised</span>
                    <span className="subtitle">place to learn algorithms easily...</span>
                    <button className="button" onClick={gotoAlgos}>Go to algorithms</button>
                </div>
                :
                <div className="algo flex-center">
                    <Link style={{textDecoration:"none"}} to="/graphs">
                    <span className="card">
                        Graph algorithms
                    </span>        
                    </Link>
                    <Link style={{textDecoration:"none"}} to="/sorting">
                    <span className="card">
                        Sorting algorithms
                    </span>
                    </Link>
                </div>
            }
        </div>
    )
}

const LandingPage = () => {
    return (
        <div className="landing-page-container flex-center">
            <Header />
            <Content />
            <Footer />         
            <ParticlesBg type="cobweb" num={window.innerWidth/10} background color="#4f30b3" bg={true} />
        </div>
    )
}

export default LandingPage