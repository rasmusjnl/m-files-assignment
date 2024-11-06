import "@components/ProjectList/ProjectListItem/styles.css";
import { Project } from "@/types";

interface Props {
  project: Project;
  selected: boolean;
  selectable: boolean;
  onSelect: () => void;
}

const projectStateToClass: Record<Project["state"], string> = {
  Finished: "finished",
  Launched: "launched",
  "Not started": "not-started",
};

const ProjectListItem: React.FC<Props> = ({ project, selected, selectable, onSelect }: Props) => {
  return (
    <div id="project-list-item-root">
      <div
        className={`info ${selected ? "selected" : ""} ${
          project.state === "Finished" || !selectable ? "disabled" : ""
        }`}
        onClick={onSelect}
      >
        <h4>{project.name}</h4>
        <p>{project.state}</p>
      </div>
      <div className={`status-indicator ${projectStateToClass[project.state]}`} />
    </div>
  );
};

export default ProjectListItem;
