import React from "react";
import { debounce } from "lodash";
import styles from "./Search.module.css"

const Search = ({ onSearch }) => {
    const [inputField, setInputField] = React.useState("");

    const handleInput = debounce((value) => {
        if (value.trim()) {
            onSearch(value);
        };
    });

    const UpdateInputField = (event) => {
        setInputField(event.target.value);
        handleInput(event.target.value);
    };

    return (
        <div className={ styles.search }>
            <input 
                type="text" 
                onChange={ UpdateInputField } 
                onKeyUp={ UpdateInputField } 
                value={ inputField } 
            />
            <button onClick={ handleInput }>Search</button>
        </div>
    );
};

export default Search;
