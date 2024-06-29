import { ImLock, ImUnlocked } from "react-icons/im";
import { useState } from "react";
import IterationContainer from "./IterationContainer";
import ExperimentModuleFooter from "./ExperimentModuleFooter";

export type Iteration = {
  title: string;
  type: "Short" | "Medium" | "Long" | null;
};

const ExperimentModule = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [iterations, setIterations] = useState<Iteration[]>([]);
  const [title, setTitle] = useState("");
  const [addingIteration, setAddingIteration] = useState(false);
  const [open, setOpen] = useState(false);
  const [wiggle, setWiggle] = useState(false);

  const handleOpen = () => {
    if (!isLocked) setOpen(!open);
    else {
      setWiggle(true);
      setTimeout(() => {
        setWiggle(false);
      }, 500);
    }
  };

  const handleLock = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsLocked(!isLocked);
  };

  const handleRemove = (index: number) => {
    setIterations((iterations) => iterations.filter((_, i) => i != index));
  };

  return (
    <div
      className={`m-2 p-6 bg-neutral-800 w-[550px] rounded-lg group cursor-pointer ${
        wiggle && "animate-wiggle"
      }`}
    >
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
      {open && !isLocked && (
        <section data-testid="container">
          <IterationContainer
            iterations={iterations}
            handleRemove={handleRemove}
            title={title}
            addingIteration={addingIteration}
            setIterations={setIterations}
          />
          <ExperimentModuleFooter
            setIterations={setIterations}
            isLocked={isLocked}
            setIsLocked={setIsLocked}
            title={title}
            setTitle={setTitle}
            addingIteration={addingIteration}
            setAddingIteration={setAddingIteration}
          />
        </section>
      )}
    </div>
  );
};

export default ExperimentModule;
