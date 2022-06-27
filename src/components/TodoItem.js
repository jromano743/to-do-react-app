import React from "react";
import '../styles/TodoItem.css';

function TodoItem(props){

    const onCompleteTodo = () => {
        alert("Completaste la tarea" + props.text);
    }

    const onDeleteTodo = () => {
        alert("Borraste la tarea" + props.text);
    }

    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onCompleteTodo}
            >
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDeleteTodo}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };