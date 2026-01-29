import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  return (
    <section id="projects">
      <h2>Projets</h2>
      <div className="grid-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onOpen={openProject} />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProject} />
      )}
    </section>
  );
} 
