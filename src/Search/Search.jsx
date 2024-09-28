import React from "react";
import styles from "./Search.module.css"

const Search = ({ onSearch }) => {
    const [inputField, setInputField] = React.useState("");

    function handleSearch() {
        onSearch(inputField);
    };

    function UpdateInputField(event) {
        if (event.key === "Enter") {
            handleSearch();
        };
        setInputField(event.target.value);
    };

    return (
        <div className={styles.search}>
            <input type="text" onChange={UpdateInputField} onKeyUp={UpdateInputField} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;

