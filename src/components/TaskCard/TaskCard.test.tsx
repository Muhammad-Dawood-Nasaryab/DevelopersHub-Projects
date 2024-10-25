import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "../../context/themeContext";
import "@testing-library/jest-dom";
import TaskCard from "./TaskCard";
import React from "react";

describe("TaskCard Component", () => {
  const mockOnDelete = vi.fn();
  const mockOnEdit = vi.fn();

  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(
      <ThemeProvider>
        {component}
      </ThemeProvider>
    );
  };

  it("renders TaskCard component with title and description", () => {
    renderWithThemeProvider(
      <TaskCard
        id={1}
        title="Test Task"
        desc="This is a test description"
        editing={false}
        onConfirmDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );

    const taskTitle = screen.getByText("Test Task");
    const taskDescription = screen.getByText("This is a test description");

    expect(taskTitle).toBeInTheDocument();
    expect(taskDescription).toBeInTheDocument();
  });

  it("calls on Delete when delete button is clicked", () => {
    renderWithThemeProvider(
      <TaskCard 
        id={1}
        title="Test Task"
        desc="This is a test description"
        editing={false}
        onConfirmDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  it("calls onEdit when edit button is clicked", () => {
    renderWithThemeProvider(
      <TaskCard 
        id={1}
        title="Test Task"
        desc="This is a test description"
        editing={false}
        onConfirmDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);
    expect(mockOnEdit).toHaveBeenCalledWith(1);
  });
});