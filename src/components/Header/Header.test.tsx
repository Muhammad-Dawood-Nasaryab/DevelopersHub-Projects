import { ThemeProvider } from "../../context/themeContext";
import { screen, render } from "@testing-library/react";
import Header from "./Header";
import React from "react";

describe("Header Component", () => {
  const renderWithProvider = (children: React.ReactElement) => {
    return render(
      <ThemeProvider>
        {children}
      </ThemeProvider>
    );
  };

  it("renders header with correct text", () => {
    renderWithProvider(
      <Header />
    );

    const headerText = screen.getByText("To-Do Manager");
    expect(headerText).toBeInTheDocument();
  })
});