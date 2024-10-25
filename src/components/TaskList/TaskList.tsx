import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import { useTheme } from "../../hooks/useTheme";
import styles from "./TaskList.module.css";

interface Task {
  id: number;
  title: string;
  desc: string;
  editing: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = React.memo(({ tasks, onDelete, onEdit }) => {
  const { isDarkMode } = useTheme();

  return (
    <main className={ isDarkMode ? styles.darkcontainer : styles.lightcontainer }> {/* For dark Theme */}
      <h2>Task List</h2>
      <ul>
        { tasks.map((task) => (
          <li key={ task.id }>
            {/* Passing all required Props to the Task Card component */}
            <TaskCard 
              id={ task.id }
              title={ task.title }
              desc={ task.desc }
              editing={ task.editing }
              onConfirmDelete={ onDelete } 
              onEdit={ onEdit } 
            />
          </li>
        )) }
      </ul>
    </main>
  );
});

export default TaskList;
