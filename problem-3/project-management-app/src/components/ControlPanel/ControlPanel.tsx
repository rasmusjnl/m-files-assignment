import { Project } from "@/types";
import "./styles.css";

interface Props {
  selectedProjects: Project[];
  onStateChange: (state: Project["state"]) => void;
}

const ControlPanel: React.FC<Props> = ({ selectedProjects, onStateChange }: Props) => {
  const disabled = selectedProjects.length === 0;
  const tooltip = disabled ? "Select a project to enable" : "";

  return (
    <div id="control-panel-root">
      <button
        disabled={disabled || selectedProjects[0].state === "Launched"}
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
