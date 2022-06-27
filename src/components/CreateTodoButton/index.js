import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const showMessage = (msg) => {
        alert(msg);
    };
    return(
        <button 
            className="CreateTodoButton"
            onClick={() => showMessage('Mostrar el modal')}
        >
        +
        </button>
    );
}

export { CreateTodoButton };