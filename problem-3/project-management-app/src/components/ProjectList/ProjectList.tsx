import ProjectListItem from "@components/ProjectList/ProjectListItem";

import "./styles.css";
import { Project } from "@/types";

interface Props {
  projects: Project[];
  selectedProjectId: number | null;
  onSelect: (project: Project) => void;
}

const ProjectList: React.FC<Props> = ({ projects, selectedProjectId, onSelect }: Props) => {
  return (
    <div id="project-list-root">
      {projects.map((project) => (
        <ProjectListItem
          key={project.id}
          project={project}
          selected={selectedProjectId === project.id}
          onSelect={() => onSelect(project)}
        />
      ))}
    </div>
  );
};

export default ProjectList;
