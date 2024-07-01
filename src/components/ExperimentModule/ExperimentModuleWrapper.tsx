import { ExperimentModuleWrapperProps } from "../types/ExperimentModuleWrapperProps";

const ExperimentModuleWrapper = ({
  wiggle,
  children,
}: ExperimentModuleWrapperProps) => {
  return (
    <div
      className={`m-2 p-6 bg-neutral-800 w-[550px] rounded-lg group cursor-pointer ${
        wiggle && "animate-wiggle"
      }`}
    >
      {children}
    </div>
  );
};

export default ExperimentModuleWrapper;
