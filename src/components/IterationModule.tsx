import { useState } from "react";

export type IterationModuleProps = {
  title: string;
  type: "Short" | "Medium" | "Long" | null;
  number: number;
  handleRemove: (index: number) => void;
  isAdding?: boolean;
  handleAddType: (
    index: number,
    type: "Short" | "Medium" | "Long" | null
  ) => void;
};

const IterationModule = ({
  title,
  number,
  handleRemove,
  type = null,
  isAdding = false,
  handleAddType,
}: IterationModuleProps) => {
  const [open, setOpen] = useState(false);

  const selectedStyle = "border border-green-500 text-green-500";
  const nonSelectedStyle = "border border-neutral-400";
  const defaultStyle = "w-fit rounded-lg p-2 cursor-pointer";

  const handleSelectType = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    type: "Short" | "Medium" | "Long"
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
      {open && !isAdding && (
        <div>
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
          <span className="text-white flex gap-6 justify-end text-lg font-semibold p-2">
            <p
              className="cursor-pointer"
              onClick={() => {
                handleRemove(number - 1);
                setOpen(false);
              }}
            >
              REMOVE
            </p>
            <p className="cursor-pointer" onClick={() => setOpen(false)}>
              DONE
            </p>
          </span>
        </div>
      )}
    </div>
  );
};

export default IterationModule;
