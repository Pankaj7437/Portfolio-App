import React from 'react'
import './Project.css'
import project from '../assets/project.jpg'
import Portfolio from '../assets/Screenshot 2026-02-03 193042.png'
import Clone from '../assets/clone.png'
import Anniversary from '../assets/anniversary.png'

function Project() {
  return (
    <>
        <section id='project' data-aos="fade-up">
            <h2 className='projectTitle'>My Projects</h2>
            <span className='projectDesc'>Here are my projects</span>

            <div className='project-item' data-aos="zoom-in-up">
                <div className='item-details'>
                    <p className='P1'>Portfolio Website</p>
                    <p className='P2'>TechStack:- HTML, CSS, JavaScript and React</p>
                    <a href='https://github.com/Pankaj7437/Portfolio-App'>Github Link</a>
                </div>

                <img src={Portfolio} alt='Project' className='projectImg'/>
            </div>    
            <div className='project-item' data-aos="zoom-in-up">
                <div className='item-details'>
                    <p className='P1'>Amazon Clone</p>
                    <p className='P2'>TechStack:- HTML and CSS</p>
                    <a href='https://github.com/Pankaj7437/Amazon-clone'>Github Link</a>
                </div>

                <img src={Clone} alt='Project' className='projectImg'/>
            </div>
            <div className='project-item' data-aos="zoom-in-up">
                <div className='item-details'>
                    <p className='P1'>Anniversary Wishes</p>
                    <p className='P2'>TechStack:- HTML , CSS, JavaScript , REACT, VITE</p>
                    <a href='https://github.com/Pankaj7437/anniversary-app'>Github Link </a><br/>
                    <a href='https://anniversary-app-rouge.vercel.app/'>Live Link</a>
                </div>

                <img src={Anniversary} alt='Project' className='projectImg'/>
            </div>
            <div className='project-item' data-aos="zoom-in-up">
                <div className='item-details'>
                    <p className='P1'>More Projects</p>
                    <p className='P2'>See my GitHub profile for more projects</p>
                    <a href='https://github.com/Pankaj7437'>Github Profile</a>

                </div>

                <img src={project} alt='Project' className='projectImg'/>
            </div>

        </section>
      
    </>
  )
}

export default Project
