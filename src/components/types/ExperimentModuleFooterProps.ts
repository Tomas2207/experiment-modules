import { Iteration } from "./Iteration";

export type ExperimentModuleFooterProps = {
  options: {
    setIterations: React.Dispatch<React.SetStateAction<Iteration[]>>;
    handleLock: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    setAddingIteration: React.Dispatch<React.SetStateAction<boolean>>;
    addingIteration: boolean;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
  };
};
