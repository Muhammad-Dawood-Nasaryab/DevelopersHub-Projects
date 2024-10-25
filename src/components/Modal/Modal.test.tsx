import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../context/themeContext";
import { ModalContext } from "../../context/ModalContext";
import Modal from "./Modal";

describe("Modal Component", () => {
  const modalContent = (
    <>
      <h3>Are you sure you want to delete this task?</h3>
      <button>Yes</button>
      <button>No</button>
    </>
  );

  const renderModal = (isModalOpen: boolean, handleClose: () => void) => {
    return render(
      <ThemeProvider>
        <ModalContext.Provider
          value={{
            isModalOpen,
            modalContent,
          }}
        >
          <Modal handleClose={handleClose} />
        </ModalContext.Provider>
      </ThemeProvider>
    );
  };

  it("renders modal content when it opens", async () => {
    const handleClose = vi.fn();
    renderModal(true, handleClose);

    const modal = screen.queryByText("Are you sure you want to delete this task?");
    const yes = screen.queryByText("Yes");
    const no = screen.queryByText("No");

    expect(modal).toBeInTheDocument();
    expect(yes).toBeInTheDocument();
    expect(no).toBeInTheDocument();
  });

  it("does not render modal when it is closed", async () => {
    const handleClose = vi.fn();
    renderModal(false, handleClose);

    const modal = screen.queryByText("Are you sure you want to delete this task?");

    expect(modal).not.toBeInTheDocument();
  });  
});
