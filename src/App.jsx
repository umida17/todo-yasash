 import React, { useState } from 'react'
 
 const App = () => {
  const [todo, setTodo]= useState("");
  const [tasks, setTasks]= useState([]);


  const addTask = () => {
    if(todo.trim() !== "") {
      setTasks([...tasks, todo]);
      setTodo("");
    }
  };


   return (
     <div>
       
     </div>
   )
 }
 
 export default App
 