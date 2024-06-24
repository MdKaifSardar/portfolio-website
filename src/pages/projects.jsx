import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
      My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div>
        <p>
          I am a student interested in the domains of Full Stack Web Development, Data Structure and Algorithms, Machine Learning  and Game Development.
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {
          projects.map((project, index) => (
          <div key={index} className='flex flex-col w-full lg:w-[400px] '>
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
                to={project.github}
                rel="noopener"
                className="font-semibold text-blue-600 mt-3 ml-3"
                 >Github Link<i className="fa-solid fa-arrow-right"></i>
                 </Link>

                <Link
                to={project.link}
                rel="noopener"
                className="font-semibold text-green-600 mt-3 ml-3 text-sm"
                 >Project Link<i className="fa-solid fa-arrow-right"></i>
                 </Link>
            </div>
          </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects
