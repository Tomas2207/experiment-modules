import { IterationType } from "./Iteration";

export type IterationModuleProps = {
  options: {
    title: string;
    type: IterationType;
    number: number;
    handleRemove: (index: number) => void;
    isAdding?: boolean;
    handleAddType: (index: number, type: IterationType) => void;
  };
};
