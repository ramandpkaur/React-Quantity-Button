import React from 'react';
import './Task.css';

const Task = ({title, description, editTask, deleteTask, index}) => {
  return (
    <div className='task'>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <button id='edit' title='Edit' onClick={()=> editTask(index)}>+</button>
      <button id='delete' title='Delete' onClick={()=> deleteTask(index)}>-</button>
    </div>
  );
}

export default Task;