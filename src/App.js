import React from 'react';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
//import './App.css';

const defaultTodos = [
  {text: "Comprar huevos", completed: false},
  {text: "Farmear el pase", completed: true},
  {text: "Terminar el bot", completed: false},
  {text: "Armar los modelos del jugador y la paloma", completed: false},
] 

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
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
        { searchedTodos.map(item =>( 
            <TodoItem 
              key={item.text} 
              text={item.text} 
              completed={item.completed}
            /> 
          ))
        }
      </TodoList>

      <CreateTodoButton />      
   </React.Fragment>
  );
}

export default App;
