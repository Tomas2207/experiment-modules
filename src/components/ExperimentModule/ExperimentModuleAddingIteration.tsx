import { ExperimentModuleAddingIterationProps } from "../types/ExperimentModuleAddingIterationProps";

const ExperimentModuleAddingIteration = ({
  options,
}: ExperimentModuleAddingIterationProps) => {
  const { setAddingIteration, setTitle, title, handleIterations } = options;
  return (
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
  );
};

export default ExperimentModuleAddingIteration;
