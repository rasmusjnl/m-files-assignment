import "./App.css";
import { useState } from "react";
import { Project } from "./types";
import { projectsData } from "./data";
import ControlPanel from "@components/ControlPanel";
import ProjectList from "@components/ProjectList";

// TODO: rename variables
const App = () => {
  const [projects, setProjects] = useState(projectsData);
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);

  const handleSelect = (project: Project) => {
    const index = selectedProjects.findIndex((p) => p.id === project.id);
    if (index !== -1) {
      // Remove project at index
      setSelectedProjects(selectedProjects.filter((_, i) => i !== index));
    } else {
      setSelectedProjects([...selectedProjects, project]);
    }
  };

  const handleStateChange = (state: Project["state"]) => {
    const updatedProjects = projects.map((project) =>
      selectedProjects.findIndex((selectedProject) => selectedProject.id === project.id)
        ? { ...project, state }
        : project,
    );
    setProjects(updatedProjects);
    setSelectedProjects([]);
  };

  return (
    <div id="app-container">
      <ProjectList
        projects={projects}
        selectedProjects={selectedProjects}
        onSelect={handleSelect}
      />
      <ControlPanel selectedProjects={selectedProjects} onStateChange={handleStateChange} />
    </div>
  );
};

export default App;
