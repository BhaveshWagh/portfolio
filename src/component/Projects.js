import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-10">
      <p
        className="text-center font-bold text-3xl text-gray-600"
        id="targethead"
      >
        Projects
      </p>
      <ProjectCard />
    </div>
  );
};

export default Projects;
