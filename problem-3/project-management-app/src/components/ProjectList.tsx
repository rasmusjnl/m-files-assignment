import { projects } from "../data";
import ProjectListItem from "./ProjectListItem";

const ProjectList: React.FC = () => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
