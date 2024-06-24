import React from 'react'
// import '../css/about.css'
import { skills, experiences } from '../constants' 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
      hello, I am <span className='blue-gradient_text font-semibold drop-shadow'>Kaif</span>
      </h1>
      <div>
        <p>
          I am a student interested in the domains of Full Stack Web Development, Data Structure and Algorithms, Machine Learning  and Game Development.
        </p>

      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {
            skills.map((skill, index) => {
              return(
                <div key={index} className='block-container w-20 h-20'>
                  <div className='btn-back rounded-x1'/>
                  <div className='btn-front rounded-x1 flex justify-center items-center'>
                    <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                  </div>
                </div>
              )
            })}
        </div>


        <div className='py-16'>
          <h3 className='subhead-text'>Work Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              I am a student in Computer Science and Engineering  from Kalyani Government Engineering College, Kalyani, Nadia, West Bengal, India. 
            </p>
          </div>
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {
                experiences.map((experience) => (
                  <VerticalTimelineElement key={experience.company_name}
                  date={experience.date}
                  icon={<div className='w-full h-full flex justify-center items-center'>
                      <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%]object-contain"
                      />
                    </div>}
                    iconStyle={{
                      background: experience.iconBg,
                    }}
                    contentStyle={{
                      borderBottom: '8px',
                      borderStyle: 'solid',
                      borderBottomColor: experience.iconBg,
                      boxShadow: 'none',
                    }}
                  >
                    <div>
                      <h3 className='text-black text-xl font-poppins font-semibold'>{experience.title}</h3>
                      <p className='text-black-500 font-medium font-poppins m-0'>
                        {experience.company_name}
                      </p>
                      <ul className='my-5 list-disc ml-5 -space-y-2'>
                        {
                          experience.points.map((point, index) => (
                            <li key={`experience-point-${index}`} className='text-black-500/50
                            font-normal pl-1 '>
                              {point}
                            </li>
                          )) 
                        }
                      </ul>
                    </div>
                  </VerticalTimelineElement>
                ))
              }
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
