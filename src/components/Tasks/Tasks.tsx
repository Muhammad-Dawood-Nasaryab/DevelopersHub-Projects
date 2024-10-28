import { ModalContext } from "../../context/ModalContext";
import React, { Suspense, useContext } from "react";
import { useTasks } from "../../hooks/useTasks";
import { useModal } from "../../hooks/useModal";
import styles from "./Tasks.module.css";
import Modal from "../Modal/Modal";
import Edit from "../Edit/Edit";
import Add from "../Add/Add";

const TaskList = React.lazy(() => import("../TaskList/TaskList"));

interface TasksListType {
  id: number;
  title: string;
  desc: string;
  editing: boolean;
}

interface TasksProps {
  testTasks?: Array<TasksListType>;
}

const Tasks: React.FC<TasksProps> = ({ testTasks }) => {  // props for test data
  const { tasks, addTask, deleteTask, editTask, saveTask } = useTasks();
  const { openModal, closeModal, setModalContent } = useModal();
  const isModalOpen = useContext(ModalContext);

  // Setting up content for modal to confirm deletion
  const confirmDelete = (id: number) => {
    if (setModalContent) {
      setModalContent(
        <>
          <h3>Are you sure you want to delete this task?</h3>
          <div>
            <button
              onClick={() => handleConfirmDelete(id)}
              className={styles.confirmBtn}
            >
              Yes
            </button>
            <button onClick={closeModal} className={styles.cancelBtn}>
              No
            </button>
          </div>
        </>
      );
    }
    // Displaying the modal after setting content
    if (openModal) {
      openModal();
    }
  };

  // Deleting task if the user agrees
  const handleConfirmDelete = (id: number) => {
    deleteTask(id);
    if (typeof closeModal === "function") {
      closeModal(); // Emptying modal
    }
  };

  // Checking if there's an editing task and displaying the edit component if so
  const editingTask = tasks.find((task) => task.editing);

  return (
    <div className={ styles.container }>
      <div className={ styles.addOrEdit }>
        { editingTask ? (
          <Edit                     // Displaying editing component if task is editing
            title={ editingTask.title } 
            desc={ editingTask.desc }
            onSave={ saveTask }
          />
        ) : (
          <Add onSubmit={ addTask } />   // Else displaying Add task component
        ) }
      </div>
      <div className={ styles.taskList }>
        <Suspense fallback={ <div>Loading...</div> }>
          { testTasks ? (
            // Displaying task list component with test data
            <TaskList
              tasks={ testTasks }
              onDelete={ confirmDelete } // Trigger delete confirmation
              onEdit={ editTask }
            />
            ) : (
            <TaskList
              tasks={ tasks }
              onDelete={ confirmDelete } // Trigger delete confirmation
              onEdit={ editTask }
            />)}
        </Suspense>
      </div>

      { isModalOpen && typeof closeModal === "function" && (
        <Modal handleClose={ closeModal } />
      )}

    </div>
  );
};

export default Tasks;
