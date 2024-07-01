import { Iteration } from "./Iteration";

export type ExperimentModuleOptionsProps = {
  handleLock: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
  setIterations: React.Dispatch<React.SetStateAction<Iteration[]>>;
  setAddingIteration: React.Dispatch<React.SetStateAction<boolean>>;
};
