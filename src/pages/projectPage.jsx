import React, { useEffect, useState } from "react";
import { projects } from "../constants";
import { Link, useParams } from "react-router-dom";

const ProjectPage = () => {
  const { proId } = useParams();
  const [selProject, setSelProject] = useState({});
  useEffect(() => {
    if (projects.length) {
      const selectedProject = projects.find((pro) => pro.id == proId);
      if (selectedProject) {
        setSelProject(selectedProject);
      }
    }
  }, []);

  useEffect(() => {
    console.log("sel projece", selProject);
  }, [selProject]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selProject.projectPics.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < selProject.projectPics.length - 1 ? prevIndex + 1 : 0
    );
  };
  return (
    <div className="max-container">
      <div className="sm:mb-2 mb-0 gap-2 flex flex-row justify-start items-center w-full">
        <img
          className="sm:w-10 w-5 sm:h-10 h-5 text-center rounded-full"
          src={selProject.iconUrl}
          alt={selProject.name}
        />
        <h1 className="project-header head-text">
          <span
            className={`project-header ${selProject.color}-gradient_text drop-shadow`}
          >
            {selProject.name}
          </span>
        </h1>
      </div>
      <div className="sm:ml-10 ml-0 mb-4">
        <span className="text-center font-sans font-thin sm:text-xl text-sm">
          {selProject.description}
        </span>
      </div>
      <div className="gap-1 flex flex-col justify-center items-center w-full">
        <div className="flex overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {selProject.projectPics && selProject.projectPics.length ? (
              selProject.projectPics.map((src, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))
            ) : (
              <div className="text-xl">No Images Found</div>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center w-full">
          <button
            onClick={handlePrevClick}
            className="text-center p-1 rounded-full px-2 hover:bg-blue-900/50 bg-blue-900 font-semibold sm:text-xl text-xs text-white"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            onClick={handleNextClick}
            className="text-center p-1 rounded-full px-2 hover:bg-blue-900/50 bg-blue-900 font-semibold sm:text-xl text-xs text-white"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="flex flex-col w-fit gap-3">
        <span className="font-thin sm:text-3xl text-xl font-sans">Links</span>
        <div className="text-center flex flex-col font-sans font-thin  sm:text-xl text-md">
          <Link className="w-fit hover:text-blue-400 text-blue-500 font-semibold flex flex-row gap-2 text-md" to={selProject.link}>
            <span>Live Link</span>
            <i className="fas fa-external-link"></i>
          </Link>
          <Link className="w-fit hover:text-blue-400 text-blue-500 font-semibold flex flex-row gap-2 text-md" to={selProject.github}>
            <span>Github Link</span>
            <i className="flex flex-row gap fas fa-external-link"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
