import { Iteration } from "./Iteration";

export type IterationContainerProps = {
  iterations: Iteration[];
  handleRemove: (index: number) => void;
  title: string;
  addingIteration: boolean;
  setIterations: React.Dispatch<React.SetStateAction<Iteration[]>>;
};
