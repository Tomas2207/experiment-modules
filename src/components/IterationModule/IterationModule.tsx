import { useState } from "react";
import IterationModuleTypeSelector from "./IterationModuleTypeSelector";
import IterationModuleFooter from "./IterationModuleFooter";
import IterationModuleHeader from "./IterationModuleHeader";
import { IterationModuleProps } from "../types/IterationModuleProps";
import { IterationType } from "../types/Iteration";

const IterationModule = ({ options }: IterationModuleProps) => {
  const [open, setOpen] = useState(false);
  const {
    title,
    number,
    handleRemove,
    type = null,
    isAdding = false,
    handleAddType,
  } = options;

  const handleSelectType = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    type: IterationType
  ) => {
    e.stopPropagation();
    handleAddType(number - 1, type);
  };

  return (
    <div
      data-testid="wrapper"
      className="bg-neutral-900 text-white rounded-lg cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <IterationModuleHeader
        title={title}
        number={number}
        type={type}
        isAdding={isAdding}
      />
      {open && !isAdding && (
        <div>
          <IterationModuleTypeSelector
            handleSelectType={handleSelectType}
            type={type}
          />
          <IterationModuleFooter
            handleRemove={handleRemove}
            setOpen={setOpen}
            number={number}
          />
        </div>
      )}
    </div>
  );
};

export default IterationModule;
