import img from '../assets/heroImg1.jpg'
import Sonu from '../assets/Sonu.jpg'

import './HeroImg.css'


const HeroAbout=()=>{
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='portfolio-image' src={img} alt="portfolio image"/>
            </div>
            
            <div className='content'>
                <img className='sonu' src={Sonu} alt="Sonu's image"/>
            <p>Hello and welcome to my portfolio website! I am a Software Developer
                specializing in Java, JavaScript and C++.I am passionate about Science, Technology,
                Engineering and Maths and I love playing Chess .
                </p>
                <br></br>
                <p>Thank you for visiting my website, and I would love to hear from you! Please don't hesitate to reach out if you're interested </p>
            
                
           
           
       </div>
       
           
           
        </div>
    )
}

export default HeroAbout