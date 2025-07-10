import React from 'react'
import './Project.css'
import project from '../assets/project.jpg'

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

                </div>

                <img src={project} alt='Project' className='projectImg'/>
            </div>    
            <div className='project-item' data-aos="zoom-in-up">
                <div className='item-details'>
                    <p className='P1'>Project 2</p>
                    <p className='P2'>TechStack:- HTML and CSS</p>

                </div>

                <img src={project} alt='Project' className='projectImg'/>
            </div>
            <div className='project-item' data-aos="zoom-in-up">
                <div className='item-details'>
                    <p className='P1'>Project 3</p>
                    <p className='P2'>TechStack:- HTML and CSS</p>

                </div>

                <img src={project} alt='Project' className='projectImg'/>
            </div>
            <div className='project-item' data-aos="zoom-in-up">
                <div className='item-details'>
                    <p className='P1'>Project 4</p>
                    <p className='P2'>TechStack:- HTML and CSS</p>

                </div>

                <img src={project} alt='Project' className='projectImg'/>
            </div>

        </section>
      
    </>
  )
}

export default Project
