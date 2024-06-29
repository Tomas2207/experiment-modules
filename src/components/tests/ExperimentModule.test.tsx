/**
 * @jest-environment jsdom
 */
import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import ExperimentModule from "../ExperimentModule";
import "@testing-library/jest-dom";

describe("ExperimentModule Component", () => {
  test("renders ExperimentModule with default state", () => {
    render(<ExperimentModule />);
    expect(screen.getByText("Experiment Module")).toBeInTheDocument();
    expect(screen.queryByTestId("lock-icon")).not.toBeInTheDocument();
  });

  test("toggles open state when clicked", () => {
    render(<ExperimentModule />);
    const moduleHeader = screen.getByTestId("header");
    fireEvent.click(moduleHeader);
    expect(screen.getByTestId("container")).toBeInTheDocument();
    fireEvent.click(moduleHeader);
    expect(screen.queryByTestId("container")).not.toBeInTheDocument();
  });
});
