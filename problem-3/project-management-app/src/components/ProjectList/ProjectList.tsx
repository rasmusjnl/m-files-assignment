import ProjectListItem from "@components/ProjectList/ProjectListItem";

import "./styles.css";
import { Project } from "@/types";

interface Props {
  projects: Project[];
  selectedProjects: Project[];
  onSelect: (project: Project) => void;
}

const ProjectList: React.FC<Props> = ({ projects, selectedProjects, onSelect }: Props) => {
  const isSelected = (id: number) =>
    selectedProjects.findIndex((selectedProject) => selectedProject.id === id) !== -1;

  const isSelectable = (state: Project["state"]) =>
    selectedProjects.length === 0 ||
    selectedProjects.every((selectedProject) => selectedProject.state === state);

  return (
    <div id="project-list-root">
      {projects.map((project) => (
        <ProjectListItem
          key={project.id}
          project={project}
          selected={isSelected(project.id)}
          selectable={isSelectable(project.state)}
          onSelect={() => onSelect(project)}
        />
      ))}
    </div>
  );
};

export default ProjectList;
