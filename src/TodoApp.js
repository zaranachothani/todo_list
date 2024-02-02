import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      if (editIndex !== null) {
        // Editing existing todo
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = { text: newTodo, completed: false, id: editIndex };
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        // Adding new todo
        setTodos([...todos, { text: newTodo, completed: false, id: todos.length }]);
      }
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setNewTodo(todos[index].text);
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>TODO List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(index)}/>
            {
              editIndex === index ? (
                <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
              ) : (
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </span>
              )
            }
            <button onClick={() => (editIndex === index ? addTodo() : editTodo(index))}>
              {editIndex === index ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className='list'>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={addTodo}>{editIndex !== null ? 'Update' : 'Add Todo'}</button>
      </div>
    </div>
  );
}

export default TodoApp;