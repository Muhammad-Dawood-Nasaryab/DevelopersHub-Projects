import { render, screen, fireEvent } from "@testing-library/react";
import { ModalProvider } from "../../context/ModalContext";
import { ThemeProvider } from "../../context/themeContext";
import Tasks from "./Tasks";
import React from "react";

describe("Tasks Component", () => {
  const tasks = [
    { id: 1, title: "Task 1", desc: "Description 1", editing: false },
  ];

  const renderWithProvider = (children: React.ReactElement) => {
    return render(
      <ThemeProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </ThemeProvider>
    );
  };
  
  it("renders add task and task list sections", async () => {
    renderWithProvider(
      <Tasks testTasks={tasks} />
    );

    const addTaskButton = await screen.findByText("Add New Task");
    const taskList = await screen.findByText("Task List");

    expect(addTaskButton).toBeInTheDocument();
    expect(taskList).toBeInTheDocument();
  });

  it("opens modal when button is clicked", async () => {
    renderWithProvider(
      <Tasks testTasks={tasks} />
    );

    const deleteButton = await screen.findByText("Delete");
    fireEvent.click(deleteButton);

    const yesButton = await screen.findByText("Are you sure you want to delete this task?");
    expect(yesButton).toBeInTheDocument();
  });
});
