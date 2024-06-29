import { useState } from "react";
import ExperimentModule from "./ExperimentModule";

const ExperimentModuleContainer = () => {
  const [modules, setModules] = useState<number[]>([1]);

  const handleAddModule = () => {
    setModules((prevModules) => [...prevModules, prevModules.length + 1]);
  };
  return (
    <section className="bg-black p-2 rounded-lg w-[600px] flex flex-col items-center my-6">
      {modules.map(() => (
        <ExperimentModule />
      ))}
      <span className="text-white flex gap-6 justify-end text-lg font-semibold">
        <p className="cursor-pointer" onClick={handleAddModule}>
          + ADD MODULE
        </p>
      </span>
    </section>
  );
};

export default ExperimentModuleContainer;
