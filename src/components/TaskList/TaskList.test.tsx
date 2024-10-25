import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../context/themeContext";
import TaskList from "./TaskList";
import React from "react";

describe("TaskList component", () => {
  
  const tasks = [
    { id: 1, title: "Task 1", desc: "Description 1", editing: false },
    { id: 2, title: "Task 2", desc: "Description 2", editing: false }
  ];
  const mockOnDelete = vi.fn();
  const mockOnEdit = vi.fn();
  
  const renderWithProvider = (children: React.ReactElement) => {
    return render(
      <ThemeProvider>
        {children}
      </ThemeProvider>
    );
  };

  it("renders TaskList component with tasks list", () => {
    renderWithProvider(
      <TaskList 
        tasks={tasks}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );

    const title1 = screen.getByText("Task 1");
    const title2 = screen.getByText("Task 2");
    const desc1 = screen.getByText("Description 1");
    const desc2 = screen.getByText("Description 2");

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(desc1).toBeInTheDocument();
    expect(desc2).toBeInTheDocument();
  });
})