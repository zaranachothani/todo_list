import './App.css';
import { useState } from "react";

function Todo3() {
  let [add, setadd] = useState("");
  let [tasks, setTasks] = useState([]);
  let [gettasks, getsetTasks] = useState([]);
  let [editIndex, setEditIndex] = useState(null);
  let [search, setsearch] = useState("");

  let handletask = () => {
    if (editIndex !== undefined && editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].name = add;
      setTasks(updatedTasks);
      setEditIndex(null);
      setadd("");
    } else {
      setTasks([...tasks, { name: add, completed: false }]);
      getsetTasks([...tasks, { name: add, completed: false }]); 
      setadd("");
    }
  }

  let handledelete = (index) => {
    var data=tasks.filter((ele,ind)=>{
      return ind!==index;
    })
    setTasks(data);
    getsetTasks(data);
  }

  let handleedit = (index) => {
    setadd(tasks[index].name);
    setEditIndex(index);
  }

  let handlecheck = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    getsetTasks(updatedTasks);
  }
  let handleserch = () =>{
    let info=[...tasks];
    var data=info.filter((ele,ind)=>{
      return ele.name==search;
    })
    setTasks(data);
    setsearch('');
  }
  let handleall=()=>{
    setTasks([...gettasks])
  }
  let completed=()=>{
    let check=tasks.filter((ele,ind)=>{
      return ele.completed==true;
    })
    setTasks(check);
  }
  let uncompleted=()=>{
    let check=tasks.filter((ele,ind)=>{
      return ele.completed==false;
    })
    setTasks(check);
  }
  return (
    <div className="App">
      <div className='container'>
      <div className="todo_list">
        <h1>To Do List</h1>
        <input type="text" value={add} onChange={(e) => setadd(e.target.value)} placeholder='Add Item...'></input>
        <input type='button' onClick={handletask} value="Add Task"></input>
        <br/>
        <br/>
      </div>
      <input type='text' placeholder='Serch..' value={search} onChange={(e)=>setsearch(e.target.value)}></input>
      <button onClick={handleserch}>Search</button>
      <button onClick={handleall}>All</button>
      <button onClick={completed}>completed</button>
      <button onClick={uncompleted}>Uncompleted</button>

      <ul className='data'>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type='checkbox' onClick={() => handlecheck(index)} checked={task.completed}></input>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
            <input type="button" onClick={() => handledelete(index)} value={'Delete'}></input>
            <input type="button" onClick={() => handleedit(index)} value={'Edit'}></input>
          </li>
        ))}
      </ul>
      
      </div>
    </div>
  );
}

export default Todo3;