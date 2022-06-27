import React from "react";
import '../styles/TodoSearch.css';

function TodoSearch(){

    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
    }

    return(
        <input 
            className="TodoSearch" 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };