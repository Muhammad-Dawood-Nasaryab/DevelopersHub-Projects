import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.header}>
            <h1>Weather App</h1>
        </div>
    );
};

export default Navbar;