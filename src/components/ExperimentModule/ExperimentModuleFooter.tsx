import { ExperimentModuleFooterProps } from "../types/ExperimentModuleFooterProps";
import ExperimentModuleAddingIteration from "./ExperimentModuleAddingIteration";
import ExperimentModuleOptions from "./ExperimentModuleOptions";

const ExperimentModuleFooter = ({ options }: ExperimentModuleFooterProps) => {
  const {
    setIterations,
    handleLock,
    setAddingIteration,
    setTitle,
    title,
    addingIteration,
  } = options;

  const handleIterations = (name: string) => {
    setIterations((prevIteration) => [
      ...prevIteration,
      {
        title: name,
        type: null,
        index:
          prevIteration.length > 0
            ? prevIteration[prevIteration.length]?.index + 1
            : 1,
      },
    ]);
    setTitle("");
    setAddingIteration(false);
  };

  return (
    <section className="flex flex-col mt-4">
      {!addingIteration ? (
        <ExperimentModuleOptions
          handleLock={handleLock}
          setAddingIteration={setAddingIteration}
          setIterations={setIterations}
        />
      ) : (
        <ExperimentModuleAddingIteration
          options={{
            handleIterations: handleIterations,
            title: title,
            setTitle: setTitle,
            setAddingIteration: setAddingIteration,
          }}
        />
      )}
    </section>
  );
};

export default ExperimentModuleFooter;
