export type ExperimentModuleAddingIterationProps = {
  options: {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setAddingIteration: React.Dispatch<React.SetStateAction<boolean>>;
    handleIterations: (name: string) => void;
  };
};
