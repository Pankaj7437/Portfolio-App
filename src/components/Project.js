import React from 'react'
import './Project.css'
import project from '../assets/project.jpg'
import Portfolio from '../assets/Screenshot 2026-02-03 193042.png'
import Anniversary from '../assets/anniversary.png'
import LoadBalancer from '../assets/loadbalancer.png'
import Intellmeet from '../assets/Intellmeet.png'

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
                    <p className='P1'>AWS load balancer ,auto scaling group</p>
                    <p className='P2'>TechStack:- AWS ALB , AWS ASG, AWS EC2</p>
                    <a href='https://github.com/Pankaj7437/aws-alb-asg-apache-project'>Github Link</a>
                </div>

                <img src={LoadBalancer} alt='Project' className='projectImg'/>
            </div>
            <div className='project-item' data-aos="zoom-in-up">
                <div className='item-details'>
                    <p className='P1'>Intellmeet- AI Powered Video Conferencing website</p>
                    <p className='P2'>TechStack:- MERN, typescript, socket.io, webRTC </p>
                    <a href='https://github.com/Pankaj7437/intellmeet'>Github Link</a>
                </div>

                <img src={Intellmeet} alt='Project' className='projectImg'/>
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
