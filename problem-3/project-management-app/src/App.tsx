import "./App.css";
import ControlPanel from "./components/ControlPanel";
import ProjectList from "./components/ProjectList";

const App = () => {
  return (
    <div>
      <ProjectList />
      <ControlPanel />
    </div>
  );
};

export default App;
