import "./App.css";
import ControlPanel from "@components/ControlPanel";
import ProjectList from "@components/ProjectList";
import { useState } from "react";
import { Project } from "./types";

const App = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelect = (project: Project) => {
    if (selectedProject?.id === project.id) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <div id="app-container">
      <ProjectList selectedProject={selectedProject} onSelect={handleSelect} />
      <ControlPanel selectedProject={selectedProject} />
    </div>
  );
};

export default App;
