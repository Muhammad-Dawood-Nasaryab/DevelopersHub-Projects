import React from "react";
import { useModal } from "../../hooks/useModal";
import { useTheme } from "../../hooks/useTheme";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
    transition: { 
			duration: 0.3,
			type: "spring",
			damping: 25,
			stiffness: 500, 
		},
	},
	exit: {
    y: "100vh",
		opacity: 0,
  }
};

interface ModalProps {
	handleClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ handleClose }) => {
	const { isModalOpen, modalContent } = useModal();
	const { isDarkMode } = useTheme();

	if (!isModalOpen) return null;

	return (
		<Backdrop onClick={handleClose}>
			<motion.div 
				className={ isDarkMode ? styles.darkmodal : styles.lightmodal } 
				onClick={(e) => e.stopPropagation()}
				whileHover={{scale: 1.1}}
				variants={dropIn}
				initial="hidden"
				animate="visible"
        exit="exit"
			>
				{ modalContent }
			</motion.div>
		</Backdrop>
	);
};

export default Modal;