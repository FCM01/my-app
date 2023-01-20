 
import React, { Component }  from 'react';
import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';
import Addtask from './components/Addtask';
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState(
    [{
             id : 1,
             text:'Doctors appointment',
             day :"Fed 5th at 2:30pm",
             reminder: true 
         },
         {
             id : 2,
             text:'Meeting at school',
             day :"Fed 6th at 8:30pm",
             reminder: false 
         }] 
     )
   
     //Delete Task 
     const deleteTask =(id)=>{
      setTasks(tasks.filter((task) =>task.id !== id ))
      
     }
     //Toggle reminder 
     const toggleReminder=(id)=>{
      // console.log (tasks.id[id])
      setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder}: task))
     } 
     //adding task 
     const newTask= (task)=>{
      const id  = Math.floor(Math.random() *10000)+ 1
      const NewTask  ={id,...task}
      setTasks([...tasks,NewTask])
     }
  return (
    <div className="container">
 
      <Header></Header>
      <Addtask addTask={newTask}/>
      { tasks.length > 0 ?<Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: "You have no tasks "}
    </div>
  );
}

export default App;
