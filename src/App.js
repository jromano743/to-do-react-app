import React from 'react';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
//import './App.css';

const todos = [
  {text: "Comprar huevos", completed: false},
  {text: "Farmear el pase", completed: true},
  {text: "Terminar el bot", completed: false},
  {text: "Armar los modelos del jugador y la paloma", completed: false},
] 

function App() {
  return (
   <React.Fragment>
      <TodoCounter />    
      <TodoSearch />

      <TodoList>
        { todos.map(item =>( 
          <TodoItem key={item.text} text={item.text} completed={item.completed}/> 
        )) }
      </TodoList>

      <CreateTodoButton />      
   </React.Fragment>
  );
}

export default App;
