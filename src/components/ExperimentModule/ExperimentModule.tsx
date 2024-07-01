import { useState } from "react";
import { Iteration } from "../types/Iteration";
import ExperimentModuleOpenContainer from "./ExperimentModuleOpenContainer";
import ExperimentModuleHeader from "./ExperimentModuleHeader";
import ExperimentModuleWrapper from "./ExperimentModuleWrapper";

const ExperimentModule = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [iterations, setIterations] = useState<Iteration[]>([]);
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

  return (
    <ExperimentModuleWrapper wiggle={wiggle}>
      <ExperimentModuleHeader
        options={{
          iterations: iterations,
          handleLock: handleLock,
          isLocked: isLocked,
          handleOpen: handleOpen,
        }}
      />
      {open && !isLocked && (
        <ExperimentModuleOpenContainer
          setIterations={setIterations}
          handleLock={handleLock}
          iterations={iterations}
        />
      )}
    </ExperimentModuleWrapper>
  );
};

export default ExperimentModule;
