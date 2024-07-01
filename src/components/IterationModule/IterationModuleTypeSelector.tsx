import { IterationModuleTypeSelectorProps } from "../types/IterationModuleTypeSelectorProps";

const IterationModuleTypeSelector = ({
  handleSelectType,
  type,
}: IterationModuleTypeSelectorProps) => {
  const selectedStyle = "border border-green-500 text-green-500";
  const nonSelectedStyle = "border border-neutral-400";
  const defaultStyle = "w-fit rounded-lg p-2 cursor-pointer";

  return (
    <span className="flex flex-wrap gap-4 p-2 font-semibold ml-16">
      <div
        onClick={(e) => handleSelectType(e, "Short")}
        className={`${
          type === "Short" ? selectedStyle : nonSelectedStyle
        } ${defaultStyle}`}
      >
        SHORT
      </div>
      <div
        onClick={(e) => handleSelectType(e, "Medium")}
        className={`${
          type === "Medium" ? selectedStyle : nonSelectedStyle
        } ${defaultStyle}`}
      >
        MEDIUM LENGTH
      </div>
      <div
        onClick={(e) => handleSelectType(e, "Long")}
        className={`${
          type === "Long" ? selectedStyle : nonSelectedStyle
        } ${defaultStyle}`}
      >
        VERY VERY LONG (UP TO 35 CHAR)
      </div>
    </span>
  );
};

export default IterationModuleTypeSelector;
