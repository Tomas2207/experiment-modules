/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import IterationContainer from "../IterationContainer";
import { Iteration } from "../ExperimentModule";
import "@testing-library/jest-dom";

describe("IterationContainer", () => {
  const iterations: Iteration[] = [
    { title: "Iteration 1", type: "Short" },
    { title: "Iteration 2", type: "Medium" },
  ];

  it("renders iteration modules", () => {
    const setIterationsMock = vi.fn();
    const handleRemoveMock = vi.fn();
    render(
      <IterationContainer
        iterations={iterations}
        handleRemove={handleRemoveMock}
        title=""
        addingIteration={false}
        setIterations={setIterationsMock}
      />
    );

    iterations.forEach((_, index) => {
      expect(screen.getByText(`Iteration ${index + 1}`)).toBeInTheDocument();
      expect(screen.getByText("Short")).toBeInTheDocument();
      expect(screen.getByText("Medium")).toBeInTheDocument();
    });
  });

  it("renders adding iteration module when addingIteration is true", () => {
    const setIterationsMock = vi.fn();
    const handleRemoveMock = vi.fn();
    render(
      <IterationContainer
        iterations={iterations}
        handleRemove={handleRemoveMock}
        title=""
        addingIteration={true}
        setIterations={setIterationsMock}
      />
    );

    expect(screen.getByText("Adding Iteration...")).toBeInTheDocument();
  });
});
