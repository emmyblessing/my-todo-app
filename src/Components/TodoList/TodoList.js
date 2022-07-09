import React from 'react';
import './TodoList.css';

const TodoList = ({todos, setTodos, setEditTodo, filteredTodos}) => {
  
  const completeTodo = (todo) => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }));
  }
  
  const deleteTodo = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  return (
    <div className='todo-container'>
      <ul className='todo'>
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="todo-content"> 
            <span className={`${todo.completed ? "complete" : ""}`}>
              {todo.title}
            </span>
            <div className='action'>
              <button onClick={() => completeTodo(todo)}>
                <i className='fa-solid fa-check check'></i>
              </button>
              <button onClick={() => editTodo(todo)}>
                <i className='fa-solid fa-edit edit'></i>
              </button>
              <button onClick={() => deleteTodo(todo)}>
                <i className='fa-solid fa-trash trash'></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
