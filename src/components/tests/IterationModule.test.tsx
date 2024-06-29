/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import IterationModule, { IterationModuleProps } from "../IterationModule";
import "@testing-library/jest-dom";

describe("IterationModule", () => {
  const mockProps: IterationModuleProps = {
    title: "Test Iteration",
    type: "Short",
    number: 1,
    handleRemove: vi.fn(),
    handleAddType: vi.fn(),
  };

  it("renders with correct title and type", () => {
    render(<IterationModule {...mockProps} />);

    expect(screen.getByText("EM-1")).toBeInTheDocument();
    expect(screen.getByText("Test Iteration")).toBeInTheDocument();
    expect(screen.getByText("Short")).toBeInTheDocument();
  });

  it("calls handleRemove when remove button is clicked", () => {
    render(<IterationModule {...mockProps} />);

    const wrapper = screen.getByTestId("wrapper");
    fireEvent.click(wrapper);

    fireEvent.click(screen.getByText("REMOVE"));

    expect(mockProps.handleRemove).toHaveBeenCalledWith(0);
  });

  it("calls handleAddType when type is selected", () => {
    render(<IterationModule {...mockProps} />);
    const wrapper = screen.getByTestId("wrapper");
    fireEvent.click(wrapper);
    fireEvent.click(screen.getByText("MEDIUM LENGTH"));

    expect(mockProps.handleAddType).toHaveBeenCalledWith(0, "Medium");
  });

  it("toggles open state when clicked", () => {
    render(<IterationModule {...mockProps} />);

    expect(screen.queryByText("VERY VERY LONG (UP TO 35 CHAR)")).toBeNull();

    fireEvent.click(screen.getByText("EM-1"));

    expect(
      screen.getByText("VERY VERY LONG (UP TO 35 CHAR)")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("DONE"));

    expect(screen.queryByText("VERY VERY LONG (UP TO 35 CHAR)")).toBeNull();
  });
});
