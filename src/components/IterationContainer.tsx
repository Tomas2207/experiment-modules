import { Iteration } from "./ExperimentModule";
import IterationModule from "./IterationModule";

type IterationContainerProps = {
  iterations: Iteration[];
  handleRemove: (index: number) => void;
  title: string;
  addingIteration: boolean;
  setIterations: React.Dispatch<React.SetStateAction<Iteration[]>>;
};

const IterationContainer = ({
  iterations,
  handleRemove,
  title: newTitle,
  addingIteration,
  setIterations,
}: IterationContainerProps) => {
  const handleAddType = (
    index: number,
    type: "Short" | "Medium" | "Long" | null
  ) => {
    const newIterations = [...iterations];
    newIterations[index] = { title: newIterations[index].title, type: type };
    setIterations([...newIterations]);
  };
  return (
    <div className="mt-4 flex flex-col gap-1">
      {iterations.map((iteration: Iteration, i: number) => (
        <IterationModule
          title={iteration.title}
          type={iteration.type}
          number={i + 1}
          handleRemove={handleRemove}
          handleAddType={handleAddType}
        />
      ))}
      {addingIteration && (
        <IterationModule
          title={newTitle || "Adding Iteration..."}
          type={null}
          number={iterations.length + 1}
          handleRemove={handleRemove}
          handleAddType={handleAddType}
          isAdding
        />
      )}
    </div>
  );
};

export default IterationContainer;
