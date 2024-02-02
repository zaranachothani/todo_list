import './App.css';
import React, { useState } from 'react';

function ToDo1() {

    const [todos,setTodos] = useState([]);
    const [inputValue,setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setTodos([...todos, inputValue]);
        setInputValue('');
    }

    return (
        <>
            <center>
                <div className='list'>
                    <input type='text' placeholder='Enter Your Task...' onChange={()=>handleChange}></input>
                </div>
                <div className='add_btn'>
                    <button onClick={()=>handleSubmit()}>Add Task</button>
                </div>
                <ul>
                    {todos.map((todo) => (
                    <li key={todo}>{todo}
                        <button>Delete</button> 
                    </li>
                    ))}
                </ul>
            </center>
        </>
    );
}

export default ToDo1;