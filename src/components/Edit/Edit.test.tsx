import { render, screen, fireEvent, act } from "@testing-library/react";
import { ThemeProvider } from "../../context/themeContext";
import Edit from "./Edit";
import React from "react";

describe("Edit Component", () => {
  const mockOnSave = vi.fn();

  const initialProps = {
    title: "Initial Title",
    desc: "Initial Description",
    onSave: mockOnSave,
  }

  beforeEach(() => {
    mockOnSave.mockClear();
  });

  const renderWithProvider = (children: React.ReactElement) => {
    return render(
      <ThemeProvider>
        {children}
      </ThemeProvider>
    );
  };

  it("renders Edit form with initial title and description", () => {
    renderWithProvider(
      <Edit 
        { ...initialProps }
      />
    );

    const titleInput = screen.getByLabelText("Title:");
    const descInput = screen.getByLabelText("Description:");
    expect(titleInput).toHaveValue("Initial Title");
    expect(descInput).toHaveValue("Initial Description");
  });

  it("calls onSve with updated values on Save button click", () => {
    renderWithProvider(
      <Edit 
        { ...initialProps }
      />
    );
  
    const titleInput = screen.getByLabelText("Title:");
    const descInput = screen.getByLabelText("Description:");
    const form = screen.getByTestId("edit-form");
  
    act(() => {
      fireEvent.change(titleInput, { target: { value: "Updated Title" } });
      fireEvent.change(descInput, { target: { value: "Updated Description" } });
      fireEvent.submit(form);
    });
  
    expect(titleInput.value).toBe("Updated Title");
    expect(descInput.value).toBe("Updated Description");
  });
});