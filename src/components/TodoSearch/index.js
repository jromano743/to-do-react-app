import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoSearch.css';

function TodoSearch(){

    const { searchValue, setSearchValue} = React.useContext(TodoContext);
    
    const onSearchValueChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
    }

    return(
        <input 
            className="TodoSearch" 
            placeholder="Buscar"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };