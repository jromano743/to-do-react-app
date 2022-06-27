import React from 'react';
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){

    const loadingMessage = "Estamos cargando, no desesperes...";
    const erroMessage = "Hubo un error! Que no panda el cunico!";
    const noItems = "¡Crea tu primera tarea!"
    return (
        <React.Fragment>
            <TodoCounter 
                total={totalTodos}
                completed={completedTodos}
            />    
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {error && <p>{erroMessage}</p>}
                {loading && <p>{loadingMessage}</p>}
                {(!loading && !searchedTodos.length) && <p>{noItems}</p>}
                { searchedTodos.map(item =>( 
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

            <CreateTodoButton />      
        </React.Fragment>
    )
}

export { AppUI }