import { ExperimentModuleOptionsProps } from "../types/ExperimentModuleOptionsProps";

const ExperimentModuleOptions = ({
  handleLock,
  setIterations,
  setAddingIteration,
}: ExperimentModuleOptionsProps) => {
  return (
    <span className="text-neutral-400 flex gap-6 justify-end text-lg font-semibold">
      <p className="cursor-pointer" onClick={(e) => handleLock(e)}>
        LOCK
      </p>
      <p className="cursor-pointer" onClick={() => setIterations([])}>
        RESET
      </p>
      <p
        className="cursor-pointer text-white"
        onClick={() => setAddingIteration(true)}
      >
        + ADD ITERATION
      </p>
    </span>
  );
};

export default ExperimentModuleOptions;
