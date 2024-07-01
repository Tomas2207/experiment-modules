import { Iteration } from "./Iteration";

export type ExperimentModuleOpenContainerProps = {
  setIterations: React.Dispatch<React.SetStateAction<Iteration[]>>;
  handleLock: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  iterations: Iteration[];
};
