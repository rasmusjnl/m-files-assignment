import "./App.css";
import { useState } from "react";
import { Project } from "./types";
import { projectsData } from "./data";
import ControlPanel from "@components/ControlPanel";
import ProjectList from "@components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelect = (project: Project) => {
    if (selectedProject?.id === project.id) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };

  const handleStateChange = (state: Project["state"]) => {
    if (selectedProject) {
      const updatedProjects = projects.map((project) =>
        project.id === selectedProject.id ? { ...selectedProject, state } : project,
      );
      setProjects(updatedProjects);
      setSelectedProject(null);
    }
  };

  return (
    <div id="app-container">
      <ProjectList
        projects={projects}
        selectedProjectId={selectedProject?.id ?? null}
        onSelect={handleSelect}
      />
      <ControlPanel selectedProject={selectedProject} onStateChange={handleStateChange} />
    </div>
  );
};

export default App;
