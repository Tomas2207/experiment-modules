/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ExperimentModuleContainer from "../ExperimentModuleContainer";

describe("ExperimentModuleContainer", () => {
  it("renders initial module", () => {
    render(<ExperimentModuleContainer />);
    const moduleElements = screen.getAllByText("Experiment Module");
    expect(moduleElements.length).toBe(1);
  });

  it("adds a new module on click", () => {
    render(<ExperimentModuleContainer />);
    const addButton = screen.getByText("+ ADD MODULE");
    fireEvent.click(addButton);
    const moduleElements = screen.getAllByText("Experiment Module");
    expect(moduleElements.length).toBe(2);
  });
});
