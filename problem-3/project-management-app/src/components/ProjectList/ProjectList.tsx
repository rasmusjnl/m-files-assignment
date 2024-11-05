import { projects } from "../../data";
import ProjectListItem from "@components/ProjectList/ProjectListItem";

import "./styles.css";
import { Project } from "@/types";

interface Props {
  selectedProject: Project | null;
  onSelect: (project: Project) => void;
}

const ProjectList: React.FC<Props> = ({ selectedProject, onSelect }: Props) => {
  return (
    <div id="project-list-root">
      {projects.map((project) => (
        <ProjectListItem
          key={project.id}
          project={project}
          selected={selectedProject?.id === project.id}
          onSelect={() => onSelect(project)}
        />
      ))}
    </div>
  );
};

export default ProjectList;
