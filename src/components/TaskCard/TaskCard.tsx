import React from "react";
import styles from "./TaskCard.module.css";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

// Animation for adding task as well as deleting
const movement = {
  initial: {
    padding: "15px",
    opacity: 0,
    y: -20,
  },
  animate: {
    padding: "15px",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    padding: 0,
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "ease",
    },
  },
};

interface TaskCardProps {
  id: number;
  title: string;
  desc: string;
  editing: boolean;
  onConfirmDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, title, desc, editing, onConfirmDelete, onEdit }) => {
  const { isDarkMode } = useTheme(); {/* For dark Theme */}

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 10px #00000084",
        transition: { duration: 0.01 },
      }}
      variants={movement}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`${
        isDarkMode ? styles.darkcard : styles.lightcard
      } ${editing ? styles.editing : ""}`}
      layout
    >
      <h3 className={isDarkMode ? styles.darktitle : styles.lighttitle}> {/* For dark Theme */}
        {title}
      </h3>
      <p className={isDarkMode ? styles.darkdesc : styles.lightdesc}> {/* For dark Theme */}
        {desc}
      </p>
      <div className={styles.buttons}>
        <button
          onClick={() => onConfirmDelete(id)}
          className={isDarkMode ? styles.darkbtn : styles.lightbtn} // For Dark Theme
        >
          Delete
        </button>
        <button
          onClick={() => onEdit(id)}
          className={isDarkMode ? styles.darkbtn : styles.lightbtn} // For Dark Theme
        >
          Edit
        </button>
      </div>
    </motion.div>
  );
};

export default TaskCard;
