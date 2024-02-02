import './App.css';
import React, { useState } from 'react';

function Todo2() {
    const [task, setTask] = useState('');
    const [tasksList, setTasksList] = useState([]);
    const [editIndex, setEditIndex] = useState(false);
    const [id, setid] = useState();
    const [search, setsearch] = useState("");
    const [store,setstore] =useState([]);

    const btnhandler = () => {
        if (editIndex) {
            const result = [...tasksList];
            result[id].task1 = task; 
            setTasksList(result);
            setEditIndex(false);
        } else {
            setTasksList([...tasksList, { task1:task, check: false }]);
            setstore([...store, { task1:task, check: false }]);  
        }
        setTask('');
    };

    const deleteHandler = (index) => {
        let del = tasksList.filter((ele, ind1) => {
            return index !== ind1;
        });
        setTasksList(del);
        setstore(del);
    };

    const editHandler = (index) => {
        setTask(tasksList[index].task1);
        setid(index);
        setEditIndex(true);
    };

        const checkHandler = (index) => {
            const updatedTodos = [...tasksList];
            updatedTodos[index].check = !updatedTodos[index].check;
            setTasksList(updatedTodos);
            setstore(updatedTodos);
        };

    const searchHandler = () => {
        var data = store.filter((ele, index) => {
            return ele.task1 === search;
        });
        setTasksList(data);
        setsearch('');
    };

    const completebtn=()=>{
        let btn=store.filter((ele,ind)=>{
            return ele.check === true;
        })
        setTasksList(btn);
    }

    const uncompletebtn=()=>{
        let btn=store.filter((ele,ind)=>{
            return ele.check === false;
        })
        setTasksList(btn);
    }

    const allbtn=()=>{
        setTasksList([...store]);
    }

    return (
        <>
            <center>
                <div className='list'>
                    <input type='text' placeholder='Enter Task' value={task} onChange={(e) => setTask(e.target.value)}></input>
                    <button onClick={btnhandler}>Add Task</button>
                </div>
                <div className='add_btn'>
                    
                    <button onClick={completebtn}>Completed Tasks</button>
                    <button onClick={uncompletebtn}>Uncompleted Tasks</button>
                    <button onClick={allbtn}>All Tasks</button>
                    <br></br>
                    <input type='text' placeholder='Search task..' value={search} onChange={(e) => setsearch(e.target.value)} />
                    <button onClick={searchHandler}>Search</button>
                </div>
                <ul>
                    {tasksList.map((taskObj, index) => (
                        <li key={index}>
                            <input type="checkbox" checked={taskObj.check} onChange={() => checkHandler(index)} />
                            <span style={{ textDecoration: taskObj.check ? 'line-through' : 'none' }}>{taskObj.task1}</span>
                            <button onClick={() => deleteHandler(index)}>DELETE</button>
                            <button onClick={() => editHandler(index)}>EDIT</button>
                        </li>
                    ))}
                </ul>
            </center>
        </>
    );
}

export default Todo2;