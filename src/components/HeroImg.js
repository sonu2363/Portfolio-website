import imag from '../assets/heroImg1.jpg'
import {Link} from 'react-router-dom'
import './HeroImg.css'


const HeroImg=()=>{
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='portfolio-imag' src={imag} alt="portfolio image"/>
            </div>
            <div className="content">
                <p>HI, I'M A </p>
                <h1>SOFTWARE DEVELOPER</h1>
                <div>
                   <Link to='https://github.com/sonu2363' className='btn'>
                GitHub
                
                </Link>
            
            <Link to='https://twitter.com/sonu_ssh' className='btn'>Twitter</Link>
            <Link to='https://www.linkedin.com/in/sonu-sah-4095a3195/' className='btn'>LinkedIn</Link>
            <Link to='https://drive.google.com/file/d/1_TZeVQI_LFA3HwvfJypplSeCayLwu3Ng/view?usp=sharing' className='btn'>Resume</Link>
                

                </div>
            </div>
        </div>
    )
}

export default HeroImg