import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const ProjectLink = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#project-link",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1,
        ease: "bounce.out",
      }
    );
  });
  return (
    <div
      id="project-link"
      className="hover:cursor-pointer w-fit p-1 rounded-xl bg-red-500 text-white shadow"
    >
      <Link rel="noopener noreferrer" target="_blank" to="https://github.com/MdKaifSardar/portfolio-website">Github Link For This Website</Link>
    </div>
  );
};

export default ProjectLink;
