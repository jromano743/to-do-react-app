import React from 'react';
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoContext } from '../TodoContext';

function AppUI(){

    const loadingMessage = "Estamos cargando, no desesperes...";
    const erroMessage = "Hubo un error! Que no panda el cunico!";
    const noItems = "¡Crea tu primera tarea!"

    return (
        <React.Fragment>
            <TodoCounter />    
            <TodoSearch />

            <TodoContext.Consumer>
                {({
                    error,
                    loading,
                    searchedTodos,
                    completeTodo,
                    deleteTodo
                }) => (
                    <TodoList>
                    {error && <p>{erroMessage}</p>}
                    {loading && <p>{loadingMessage}</p>}
                    {(!loading && !searchedTodos.length) && <p>{noItems}</p>}
                    {searchedTodos.map(item =>( 
                        <TodoItem 
                        key={item.text} 
                        text={item.text} 
                        completed={item.completed}
                        onComplete={() => completeTodo(item.text)}
                        onDelete={() => deleteTodo(item.text)}
                        /> 
                    ))
                    }
                    </TodoList>
                )}
            </TodoContext.Consumer>

            <CreateTodoButton />      
        </React.Fragment>
    )
}

export { AppUI }