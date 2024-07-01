export type IterationType = "Short" | "Medium" | "Long" | null;

export type Iteration = {
  index: number;
  title: string;
  type: IterationType;
};
