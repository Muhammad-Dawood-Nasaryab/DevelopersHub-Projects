import React from "react";
import { useTheme } from "../../context/themeContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <div className={ isDarkMode ? styles.headerDark : styles.headerLight }>
            <h1>Weather App</h1>
            <button onClick={ toggleDarkMode }>
                { isDarkMode ? "Light Mode" : "Dark Mode" }
            </button>
        </div>
    );
};

export default Navbar;