import { IterationModuleHeaderProps } from "../types/IterationModuleHeaderProps";

const IterationModuleHeader = ({
  number,
  isAdding,
  title,
  type,
}: IterationModuleHeaderProps) => {
  return (
    <span className="flex justify-between gap-4 p-2 text-xl">
      <p>EM-{number}</p>
      <p className="flex-1">{title ? title : "Iteration Title"}</p>
      {!isAdding && (
        <div className="flex-1 ml-auto flex items-center gap-2 justify-end">
          <p>{type ? type : "Selection"}</p>
          <div className="h-2 w-2 bg-green-500 rounded-full" />
        </div>
      )}
    </span>
  );
};

export default IterationModuleHeader;
