import React, { useState } from "react";
import IterationContainer from "../IterationModule/IterationContainer";
import ExperimentModuleFooter from "./ExperimentModuleFooter";
import { ExperimentModuleOpenContainerProps } from "../types/ExperimentModuleOpenContainerProps";

const ExperimentModuleOpenContainer = ({
  setIterations,
  handleLock,
  iterations,
}: ExperimentModuleOpenContainerProps) => {
  const [title, setTitle] = useState("");
  const [addingIteration, setAddingIteration] = useState(false);

  const handleRemove = (index: number) => {
    setIterations((iterations) => iterations.filter((_, i) => i != index));
  };
  return (
    <section data-testid="container">
      <IterationContainer
        iterations={iterations}
        handleRemove={handleRemove}
        title={title}
        addingIteration={addingIteration}
        setIterations={setIterations}
      />
      <ExperimentModuleFooter
        options={{
          setIterations: setIterations,
          handleLock: handleLock,
          title: title,
          setTitle: setTitle,
          addingIteration: addingIteration,
          setAddingIteration: setAddingIteration,
        }}
      />
    </section>
  );
};

export default ExperimentModuleOpenContainer;
