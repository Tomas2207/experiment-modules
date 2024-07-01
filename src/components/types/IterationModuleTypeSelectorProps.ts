import { IterationType } from "./Iteration";

export type IterationModuleTypeSelectorProps = {
  handleSelectType: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    type: IterationType
  ) => void;
  type: IterationType;
};
