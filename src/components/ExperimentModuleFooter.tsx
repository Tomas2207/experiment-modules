import { Iteration } from "./ExperimentModule";

type ExperimentModuleFooterProps = {
  setIterations: React.Dispatch<React.SetStateAction<Iteration[]>>;
  setIsLocked: React.Dispatch<React.SetStateAction<boolean>>;
  isLocked: boolean;
  setAddingIteration: React.Dispatch<React.SetStateAction<boolean>>;
  addingIteration: boolean;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

const ExperimentModuleFooter = ({
  setIterations,
  setIsLocked,
  isLocked,
  setAddingIteration,
  setTitle,
  title,
  addingIteration,
}: ExperimentModuleFooterProps) => {
  const handleIterations = (name: string) => {
    setIterations((prevIteration) => [
      ...prevIteration,
      { title: name, type: null },
    ]);
    setTitle("");
    setAddingIteration(false);
  };

  return (
    <section className="flex flex-col mt-4">
      {!addingIteration ? (
        <span className="text-neutral-400 flex gap-6 justify-end text-lg font-semibold">
          <p className="cursor-pointer" onClick={() => setIsLocked(!isLocked)}>
            LOCK
          </p>
          <p className="cursor-pointer" onClick={() => setIterations([])}>
            RESET
          </p>
          <p
            className="cursor-pointer text-white"
            onClick={() => setAddingIteration(true)}
          >
            + ADD ITERATION
          </p>
        </span>
      ) : (
        <span className="flex flex-col">
          <textarea
            className="bg-neutral-900 text-xl text-neutral-400 p-2"
            name=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id=""
            placeholder="To add a new iteration, start typing a prompt or generate one"
          ></textarea>
          <span className="flex gap-6 justify-end mt-2 text-lg font-semibold">
            <p
              onClick={() => setAddingIteration(false)}
              className="text-neutral-400 cursor-pointer"
            >
              CANCEL
            </p>
            <p
              className="text-white cursor-pointer"
              onClick={() => handleIterations(title)}
            >
              DONE
            </p>
          </span>
        </span>
      )}
    </section>
  );
};

export default ExperimentModuleFooter;
