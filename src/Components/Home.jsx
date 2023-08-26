import React, { useState, useEffect } from 'react';
import './Home.css';
import Task from './Task';

const Home = () => {
  const initialStorage = localStorage.getItem('myTasks')?JSON.parse(localStorage.getItem('myTasks')):[];

  const [tasks, setTasks] = useState(initialStorage);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toggleBtn, setToggleBtn] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);


  const submitHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks, { title, description }, ]);
    setTitle('');
    setDescription('');
  };

  const deleteTask = (index) => {
    const filteredArray = tasks.filter((val, i) => {
      return i !== index;
    });
    setTasks(filteredArray);
  };

  const editTask = (index) => {
    const updateItem = tasks.find((val) => {
      return val.id === index
    });
    setToggleBtn(false);
    console.log(updateItem);

    setTitle(updateItem.title);
    setDescription(updateItem.descripiton);

    setSelectedItem(id);

  };

  useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }, [tasks]);  

  return (
    <div className='container'>
      <h2>Your Daily Goals</h2>
      <form className='add-task' onSubmit={submitHandler}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} />
        <br />
        <textarea placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
        {toggleBtn ? <button type="submit">Add Task</button> : <button type="submit">Update Task</button> }
      </form>

      {tasks.map((item) => (
        <Task key={item.index} title={item.title} description={item.description} editTask={editTask} deleteTask={deleteTask} index={item.index} />
      ))}
        
    </div>
  );
};

export default Home