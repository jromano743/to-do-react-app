import React from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';

const TodoContext = React.createContext();

const TODO_VERSION = "TODOS_V1";

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage(TODO_VERSION, []);  
    
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(!searchValue.length > 0){
    searchedTodos = todos;
    }else{
    searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();

        return todoText.includes(searchText);
    })
    }

    const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    }

    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider};
