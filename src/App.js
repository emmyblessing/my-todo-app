import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import TodoList from './Components/TodoList/TodoList';

function App() {

  const initialState = JSON.parse(localStorage.getItem('todos')) || [];

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("All");

  useEffect(() => {
    filterHandler();
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, status]);
  

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className='design-view'>
        <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          setStatus = {setStatus}
        />
        <TodoList 
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  );
}

export default App;
