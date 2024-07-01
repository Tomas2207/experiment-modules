import { Iteration } from "./Iteration";

export type ExperimentModuleHeaderProps = {
  options: {
    iterations: Iteration[];
    handleLock: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    isLocked: boolean;
    handleOpen: () => void;
  };
};
