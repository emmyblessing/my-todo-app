import React, { useEffect } from 'react';
import './Form.css';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo, setStatus}) => {

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo])
  

  const onInputChange = (e) => {
    setInput(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(!editTodo) {
      setTodos([
        ...todos,
        {
          id: new Date().getTime(),
          title: input,
          completed: false,
        }
      ]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  }

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => (
      todo.id === id ? {title, id, completed} : todo
    ));
    setTodos(newTodo);
    setEditTodo("");
  }

  const todoStatus = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className='form'>
        <input 
          type="text" 
          placeholder='Enter your todo'
          value={input}
          onChange={onInputChange}
          required
        />
        <button className='btn-add' type='submit'>
          {editTodo ? "Update" : "Add"}
        </button>
      </div>
      <div className='select'>
        <select className='todo-filter' onChange={todoStatus}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;