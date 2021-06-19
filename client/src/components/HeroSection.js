import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
function HeroSection() {
    return (
        <>
           <div className="hero-container">
               {/* <video src="/videos/video-1.mp4" autoPlay loop muted/> */}
               <h1>Analyse Now</h1>
               <p>What are you waiting for ?</p>
               <div className="hero-btns">
               <Link to ="/demo" className="nav-links-mobile">
                                
                            
                   <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH DEMO</Button>
                </Link>
               </div>
           </div>
        </>
    )
}

export default HeroSection
