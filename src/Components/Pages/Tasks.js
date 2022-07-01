import React, { useEffect, useState } from 'react';

import Task from "./task";

const Tasks = () => {
    const[ tasks , setTasks]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/task')
        .then(res=>res.json())
        .then(data=>setTasks(data))
    },[])
    return (
        <div className='task-container w-2/4 m-auto'>
             {
            tasks.map(task=><Task
              key={task._id}
              task={task}
              ></Task>)
        
         }
        </div>
    );
};

export default Tasks;