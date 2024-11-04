export interface Project {
  id: number;
  name: string;
  state: ProjectState;
}

type ProjectState = "Not started" | "Launched" | "Finished"