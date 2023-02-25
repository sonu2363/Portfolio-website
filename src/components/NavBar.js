import './NavBarStyles.css'

import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'

const NavBar=()=>{
    const [click,setClick]=useState(false)
    const [color,setColor]=useState(false)
    const changeColor=()=>{
        // if(window.scrollY>=1)
         if(window.scrollY>=100)
        {
            setColor(true)
        }
        else{
            setColor(false)
        }
        
    }
    window.addEventListener("scroll",changeColor)
    const handleClick=()=>{
        setClick(!click)
    }
    return (
        <div className={color?'headers headers-bg':'headers'}>
        <h1><Link to='/'>Portfolio</Link></h1>
    
        {/* <ul className={click?'nav-menu.active':'nav-menu'}>In this code, the mistake is that "menu.active" is wrong and the right is "menu active"
         */}
    
        <ul className={click?'nav-menu active':'nav-menu'}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (
                <FaTimes size={20} style={{color:"#fff"}}/>

            ):(
                <FaBars size={20} style={{color:"#fff"}}/>

            )
        }
            
           

        </div>
       
        

        </div>
    )

}

export default NavBar