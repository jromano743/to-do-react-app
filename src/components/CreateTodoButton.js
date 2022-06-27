import React from "react";
import '../styles/CreateTodoButton.css';

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