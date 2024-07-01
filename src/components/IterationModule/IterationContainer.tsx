import { Iteration, IterationType } from "../types/Iteration";
import { IterationContainerProps } from "../types/IterationContainerProps";
import IterationModule from "./IterationModule";

const IterationContainer = ({
  iterations,
  handleRemove,
  title: newTitle,
  addingIteration,
  setIterations,
}: IterationContainerProps) => {
  const handleAddType = (index: number, type: IterationType) => {
    const newIterations = [...iterations];
    newIterations[index] = {
      title: newIterations[index].title,
      type: type,
      index: index,
    };
    setIterations([...newIterations]);
  };
  return (
    <div className="mt-4 flex flex-col gap-1">
      {iterations.map((iteration: Iteration, i: number) => (
        <IterationModule
          options={{
            title: iteration.title,
            type: iteration.type,
            number: i + 1,
            handleRemove: handleRemove,
            handleAddType: handleAddType,
          }}
        />
      ))}
      {addingIteration && (
        <IterationModule
          options={{
            title: newTitle || "Adding Iteration...",
            type: null,
            number: iterations.length + 1,
            handleRemove: handleRemove,
            handleAddType: handleAddType,
            isAdding: true,
          }}
        />
      )}
    </div>
  );
};

export default IterationContainer;
