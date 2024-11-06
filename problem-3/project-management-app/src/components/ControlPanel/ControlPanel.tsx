import { Project } from "@/types";
import "./styles.css";

interface Props {
  selectedProject: Project | null;
  onStateChange: (state: Project["state"]) => void;
}

const ControlPanel: React.FC<Props> = ({ selectedProject, onStateChange }: Props) => {
  const disabled = selectedProject === null || selectedProject.state === "Finished";
  const tooltip = disabled ? "Select a project to enable" : "";

  return (
    <div id="control-panel-root">
      <button
        disabled={disabled || selectedProject.state === "Launched"}
        title={tooltip}
        onClick={() => onStateChange("Launched")}
      >
        Launch project
      </button>
      <button disabled={disabled} title={tooltip} onClick={() => onStateChange("Finished")}>
        Finish project
      </button>
    </div>
  );
};

export default ControlPanel;
