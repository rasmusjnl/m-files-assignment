import "@components/ControlPanel/styles.css";
import { Project } from "@/types";

interface Props {
  selectedProjects: Project[];
  onStateChange: (state: Project["state"]) => void;
}

const ControlPanel: React.FC<Props> = ({ selectedProjects, onStateChange }: Props) => {
  const disabled = selectedProjects.length === 0;

  return (
    <div id="control-panel-root">
      <button
        disabled={disabled || selectedProjects[0].state === "Launched"}
        onClick={() => onStateChange("Launched")}
      >
        Launch project(s)
      </button>
      <button disabled={disabled} onClick={() => onStateChange("Finished")}>
        Finish project(s)
      </button>
    </div>
  );
};

export default ControlPanel;
