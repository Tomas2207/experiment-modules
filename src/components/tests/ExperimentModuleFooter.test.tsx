/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ExperimentModuleFooter from "../ExperimentModule/ExperimentModuleFooter";
import "@testing-library/jest-dom";

describe("ExperimentModuleFooter", () => {
  it("renders default footer", () => {
    const setIterationsMock = vi.fn();
    const handleLock = vi.fn();
    render(
      <ExperimentModuleFooter
        options={{
          setIterations: setIterationsMock,
          handleLock: handleLock,
          setAddingIteration: vi.fn(),
          addingIteration: false,
          title: "",
          setTitle: vi.fn(),
        }}
      />
    );

    expect(screen.getByText("LOCK")).toBeInTheDocument();
    expect(screen.getByText("RESET")).toBeInTheDocument();
    expect(screen.getByText("+ ADD ITERATION")).toBeInTheDocument();
  });

  it("renders adding iteration form on click", () => {
    const setTitleMock = vi.fn();
    const setAddingIterationMock = vi.fn();
    render(
      <ExperimentModuleFooter
        options={{
          setIterations: vi.fn(),
          handleLock: vi.fn(),
          setAddingIteration: setAddingIterationMock,
          addingIteration: true,
          title: "",
          setTitle: setTitleMock,
        }}
      />
    );

    expect(
      screen.getByPlaceholderText(/to add a new iteration/i)
    ).toBeInTheDocument();
    expect(screen.getByText("CANCEL")).toBeInTheDocument();
    expect(screen.getByText("DONE")).toBeInTheDocument();
  });
});
