import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectsContainer } from "./ProjectsContainer";

export const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2>Projects</h2>
      <hr></hr>

      {/* map the projects.json for the project details. ProjectsContainer contain the structure/props for each project*/}
      <div className={styles.projects} data-aos="fade-right">
        {projects.map((project, id) => {
          return <ProjectsContainer key={id} project={project} />;
        })}
      </div>

      <a
        href="https://github.com/marliaren"
        className={styles.moreBtn}
        target="_blank"
      >
        Explore more at GitHub
      </a>
    </section>
  );
};
