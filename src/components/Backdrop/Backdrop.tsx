import React from "react";
import styles from "./Backdrop.module.css";
import { motion } from "framer-motion";

interface BackdropProps {
  onClick: () => void;
  children: React.ReactNode; 
};

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <motion.div
      data-test-id="backdrop"
      className={styles.backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;