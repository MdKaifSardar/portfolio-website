import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import "../css/homeinfo.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ProjectLink from "./projectLink";

const ContentBox = ({ text, link, btnText, currentStage }) => {
  const boxRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      "#box-content",
      {
        y: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 50,
        ease: "bounce.out",
        duration: 1.5,
      }
    );
    gsap.fromTo(
      "#element",
      {
        opacity: 0,
      },
      {
        stagger: 0.7,
        delay: 0.5,
        duration: 0.6,
        opacity: 1,
        ease: "back.out",
      }
    );
  });
  return (
    <div
      ref={boxRef}
      id="box-content"
      className="rounded-lg  mx-2 w-fit bg-blue-500 flex flex-col justify-center items-center p-2"
    >
      <p
        id="element"
        className="text-center py-2 pb-3 px-3 font-sans text-white font-normal sm:text-xl text-md"
      >
        {text}
      </p>
      <Link
        id="element"
        to={link}
        className="hover:bg-slate-500 flex flex-row gap-2 justify-center items-center hover:cursor-pointer rounded-full text-center p-2 shadow bg-white w-4/5 absolute bottom-[-20px]"
      >
        {btnText}
        <img src={arrow} alt="arrow" />
      </Link>
    </div>
  );
};

const Homeinfo = ({ currentStage }) => {
  useGSAP(() => {
    gsap.fromTo(
      "#first-box",
      {
        y: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 50,
        duration: 1,
        ease: "bounce.out",
        delay: 0.5,
      }
    );
    gsap.fromTo(
      "#element-first-box",
      {
        opacity: 0,
      },
      {
        stagger: 1,
        delay: 0.5,
        duration: 1,
        opacity: 1,
      }
    );
  });
  if (currentStage === 1) {
    return (
      <div
        id="first-box"
        className="mx-2 flex flex-col bg-blue-500 shadow-lg shadow-blue-300 p-3 rounded-2xl"
      >
        <h1 id="element-first-box" className="first_heading">
          Hi there, I am Md Kaif Sardar
        </h1>
        <span id="element-first-box" className="first_text">
          I am a Computer Science and Engineering student from India
        </span>
        <div className="mt-2 w-full flex flex-row justify-center items-center">
          <ProjectLink />
        </div>
      </div>
    );
  } else if (currentStage === 2) {
    return (
      <ContentBox
        currentStage={currentStage}
        text={"Want to know more about me? click below"}
        link={"/about"}
        btnText={"About Me"}
      />
    );
  } else if (currentStage === 3) {
    return (
      <ContentBox
        text={"Check out some of my projects"}
        link={"/projects"}
        btnText={"Projects"}
      />
    );
  } else if (currentStage === 4) {
    return (
      <ContentBox
        text={"Want to get in touch? click below"}
        link={"/contact"}
        btnText={"Let's Talk"}
      />
    );
  }
};

export default Homeinfo;
