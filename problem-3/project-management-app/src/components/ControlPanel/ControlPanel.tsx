import { Project } from "@/types";
import "./styles.css";

interface Props {
  selectedProject: Project | null;
}

const ControlPanel: React.FC<Props> = ({ selectedProject }: Props) => {
  const disabled = selectedProject === null;
  const tooltip = disabled ? "Select a project to enable" : "";

  const handleLaunch = () => {};

  const handleFinish = () => {};

  return (
    <div id="control-panel-root">
      <button disabled={disabled} title={tooltip} onClick={handleLaunch}>
        Launch project
      </button>
      <button disabled={disabled} title={tooltip} onClick={handleFinish}>
        Finish project
      </button>
    </div>
  );
};

export default ControlPanel;
