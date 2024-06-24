import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import '../css/homeinfo.css'

const ContentBox =({text, link, btnText}) => {
    return(
        <div className='main_contentbox_container'>
            <p className='content_text'>
                {text}
            </p>
            <Link to={link} className='content_box_link'>
                {btnText}
            </Link>
        </div>   
    )
}

const Homeinfo = ({currentStage}) => {
    // useEffect(() => {
    //     console.log(currentStage);
    // }, [currentStage]);

    if(currentStage === 1){
        return(
            <div className='first_container'>
                <h1 className='first_heading'>
                        Hi there, I am Md Kaif Sardar
                </h1>
                <span className='first_text'>I am a Computer Science and Engineering student from India</span>
            </div>
        )
    }
    else if (currentStage === 2) {
        return (
            <ContentBox 
                text={"Want to know more about me? click below"}
                link={"/about"}
                btnText={"About Me"}
            />
        );
    }
    else if(currentStage === 3){
        return (
            <ContentBox 
            text={"Check out some of my projects"}
            link={"/projects"}
            btnText={"Projects"}
            />
        )
    }
    else if(currentStage === 4){
        return (
            <ContentBox 
            text={"Want to get in touch? click below"}
            link={"/contact"}
            btnText={"Let's Talk"}
            />
        )
    }
}

export default Homeinfo
