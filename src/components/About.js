import React from 'react'
import HTML from '../assets/HTML5_Badge.svg'
import CSS from '../assets/css-3.svg'
import './About.css'
import Boot from '../assets/bootstrap.png'
import JS from '../assets/javascript.svg'
import R from '../assets/react.svg'
import Linux from '../assets/linux.png'
import Git from '../assets/git.png'
import Github from '../assets/github.svg'
import AWS from '../assets/AWS.png'
import Devops from '../assets/devops.jpg'

function About() {
  return (
    <section id='about' data-aos="fade-up">
        <span className='aboutTitle'>What I Know</span>
        <span className='aboutDesc'>As a creative and detail-oriented web developer, I specialize in building responsive websites using HTML, CSS, JavaScript, Bootstrap, and React. My focus is on performance, design, and usability. Now On my way for cloud and devoops.</span>

        <div className='aboutBars'>
            <div className='aboutBar' data-aos="fade-up" data-aos-delay="100">
                <img src={HTML} alt='HTML' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>HTML</h2>
                    <p>Hypertext Markup Language</p>
                </div>
            </div>

            <div className='aboutBar' data-aos="fade-up" data-aos-delay="100">
                <img src={CSS} alt='CSS' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>CSS</h2>
                    <p>Cascading Style Sheets</p>
                </div>
            </div>

            <div className='aboutBar' data-aos="fade-up" data-aos-delay="100">
                <img src={Boot} alt='Bootstrap' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>Bootstrap</h2>
                    <p>Bootstrap</p>
                </div>
            </div>

            <div className='aboutBar' data-aos="fade-up" data-aos-delay="100">
                <img src={JS} alt='JS' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>JS</h2>
                    <p>JavaScript</p>
                </div>
            </div>

            <div className='aboutBar' data-aos="fade-up" data-aos-delay="100">
                <img src={R} alt='React' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>React</h2>
                    <p>React.js</p>
                </div>
            </div>
            <div className='aboutBar' data-aos="fade-up" data-aos-delay="100">
                <img src={Linux} alt='Linux' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>Linux</h2>
                    <p>Linux System Administration</p>
                </div>
            </div>
            <div className='aboutBar' data-aos="fade-up" data-aos-delay="100">
                <img src={Git} alt='git' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>Git</h2>
                    <p>Version Control System</p>
                </div>
            </div>
            <div className='aboutBar' data-aos="fade-up" data-aos-delay="100">
                <img src={Github} alt='github' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>GitHub</h2>
                    <p>Version Control System</p>
                </div>
            </div>
            <div className='aboutBar' data-aos="fade-up" data-aos-delay="100">
                <img src={AWS} alt='AWS' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>AWS</h2>
                    <p>Amazon Web Services</p>
                </div>
            </div>
            <div className='aboutBar' data-aos="fade-up" data-aos-delay="100">
                <img src={Devops} alt='Devops' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>Learning DevOps</h2>
                    <p>DevOps Practices and Tools</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
