import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = ({ onSearch }) => {
    const [city, setCity] = useState("");

    function changeInputField(event) {
        if (event.key === "Enter") {
            hanldeSearch();
        };

        setCity(event.target.value);
    };

    function hanldeSearch() {
        if (city.trim()) {
            onSearch(city);
        };
    };

    return (
        <div className={styles.search}>
            <input 
                type="text"
                value={city}
                placeholder="Enter city name"
                onChange={changeInputField}
                onKeyUp={changeInputField}
            />
            <button onClick={hanldeSearch}>Search</button>
        </div>
    );
};

export default Search;