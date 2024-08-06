import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Projects = () => {
  useGSAP(() => {
    gsap.fromTo('.project-header', {
      y:-60,
      opacity: 0,
    },
    {
      y:0,
      opacity: 1,
      duration: .4,
      ease: 'back.out',
      stagger: .6,
      delay: .4,
    })

    gsap.fromTo('#project-header-text', {
      opacity: 0,
      x: -100,
    },{
      opacity: 1,
      x: 0,
      delay: 1.3,
    })

    gsap.fromTo('.project-box', {
      opacity: 0,
      y: -60,
    }, {
      opacity: 1,
      y: 0,
      ease: 'power3.out',
      delay: 1.5,
      stagger: .5,
    })
  })

  return (
    <section className='max-container'>
      <h1 className='project-header head-text'>
        My 
      <span className='project-header blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div id='project-header-text'>
        <p className='mt-2'>
          I am a student interested in the domains of Full Stack Web Development, Data Structure and Algorithms, Machine Learning  and Game Development.
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {
          projects.map((project, index) => (
          <div key={index} className='flex flex-col w-full lg:w-[400px] project-box'>
            <div className='block-container w-12 h-12 flex flex-row'>
              <div className={`w-12 h-12 btn-back rounded-xl ${project.theme}`}/>
                <div className='w-12 h-12 btn-front rounded-xl flex justify-center items-center'>
                  <img src={project.iconUrl} alt={project.name} className='w-1/2 h-1/2'/>
                </div>
            </div>
            <div className='mt-5 flex flex-col'>
                <h2 className='subhead-text mb-4 font-poppins'>
                  {project.name}
                </h2>
                <p>{project.description}</p>
                 <Link 
                  rel="noopener noreferrer"
                  className="font-semibold text-green-600 mt-3 ml-3 text-sm"
                  to={`/project-page/${project.id}`}>View Project</Link>
            </div>
          </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects
