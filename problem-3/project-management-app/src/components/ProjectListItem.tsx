import { Project } from "../types";

interface Props {
  project: Project;
}

const ProjectListItem: React.FC<Props> = ({ project }: Props) => {
  return (
    <div>
      <div>{project.name}</div>
      <div>{project.state}</div>
    </div>
  );
};

export default ProjectListItem;
