import { ImLock, ImUnlocked } from "react-icons/im";
import { ExperimentModuleHeaderProps } from "../types/ExperimentModuleHeaderProps";

const ExperimentModuleHeader = ({ options }: ExperimentModuleHeaderProps) => {
  const { iterations, handleLock, isLocked, handleOpen } = options;
  return (
    <span
      data-testid="header"
      onClick={handleOpen}
      className="flex justify-between items-center text-3xl "
    >
      <p className="text-neutral-500 font-semibold group-hover:text-white transition duration-150">
        Experiment Module
      </p>

      {iterations.length != 0 && (
        <div
          data-testid="lock-icon"
          className="text-neutral-500 cursor-pointer hover:text-white transition duration-150"
          onClick={(e) => handleLock(e)}
        >
          {isLocked ? <ImLock /> : <ImUnlocked />}
        </div>
      )}
    </span>
  );
};

export default ExperimentModuleHeader;
