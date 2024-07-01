import { IterationModuleFooterProps } from "../types/IterationModuleFooterProps";

const IterationModuleFooter = ({
  handleRemove,
  setOpen,
  number,
}: IterationModuleFooterProps) => {
  return (
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
  );
};

export default IterationModuleFooter;
