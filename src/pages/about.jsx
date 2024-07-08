import React, { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from "gsap/all";
// import '../css/about.css'
import { skills, experiences } from '../constants' 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const expHeaderRef = useRef();
  const expDivRef = useRef();
  const [scrollY, setScrollY]= useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => (
      window.removeEventListener("scroll", handleScroll)
    )
  })

  useGSAP(() => {
    gsap.fromTo('.header-text', {
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
    gsap.fromTo('#main-text', {
      opacity: 0,
      x: -100,
    },{
      opacity: 1,
      x: 0,
      delay: 1,
    })

    gsap.fromTo('#skill-header', {
      opacity:0,
      y: -20,
    },{
      opacity: 1,
      y: 0,
      delay: 1.5
    })

    gsap.fromTo('#skillItems', {
      y: -50,
      opacity: 0,  
    },{
      y: 0,
      delay: 2,
      opacity: 1,
      stagger: .3,
      ease: 'bounce.inOut',
      duration: .4,
    })
})
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        <div className='font-normal font-poppins text-center header-text'>
          Hello, I am 
        </div>
        <div className='blue-gradient_text font-poppins text-center header-text font-semibold drop-shadow'>
          Kaif
        </div>
      </h1>
      <div>
        <p id='main-text' className='sm:text-lg text-sm text-slate-500/70'>
          I am a student interested in the domains of Full Stack Web Development, Data Structure and Algorithms, Machine Learning  and Game Development.
        </p>

      </div>

      <div className='py-10 flex flex-col'>
        <h3 id='skill-header' className='subhead-text'>My Skills</h3>

        <div className='mt-4 justify-center items-center flex flex-wrap gap-12'>
          {
            skills.map((skill, index) => {
              return(
                <div id='skillItems' key={index} className='block-container sm:w-20 w-12 sm:h-20 h-12'>
                  <div className='btn-back rounded-x1'/>
                  <div className='btn-front rounded-x1 flex justify-center items-center'>
                    <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                  </div>
                </div>
              )
            })}
        </div>


        <div className='py-16'>
          <h3 id="scrollTrigger" className='subhead-text'>Work Experience</h3>
          <div id="scrollTrigger" className='mt-3 flex flex-col gap-3 text-slate-500'>
            <p>
              I am a student in Computer Science and Engineering  from Kalyani Government Engineering College, Kalyani, Nadia, West Bengal, India. 
            </p>
          </div>
          <div className='mt-4 flex'>
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
                            <li key={`experience-point-${index}`} className='sm:text-lg text-sm text-black-500/50
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
