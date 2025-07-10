import React from 'react'
import './Intro.css'
import {Link} from 'react-scroll'
import btnImg from '../assets/hireme.png' 
import reactLogo from '../assets/react.svg'
import { Typewriter } from 'react-simple-typewriter'

function Intro() {
  return (
    <>
        <section id='intro' data-aos="fade-down">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>
                    I'm <span className='introName'>Pankaj Sharma</span>,
                    <br />
                    <span className='typewriter-text'>
                        <Typewriter
                            words={['Web Developer', 'React Developer', 'Frontend Enthusiast']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </span>
                <p className='introPara'>
                    I turn blank screens into bold, beautiful, and blazing-fast websites.
                    <br/>
                    Your vision, my code — let’s build something that stands out.
                </p>
                {/* <Link> */}
                <a href='https://www.linkedin.com/in/pankaj-sharma-811077323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> 
                    <button className='btn2'>
                        <img src={btnImg} alt='Img' className='btnImg2'/>
                        Hire Me
                    </button>
                </a>
                {/* </Link> */}
            </div>

            <img src={reactLogo} className='logo2' alt='React img' />
        </section>
      
    </>
  )
}

export default Intro
