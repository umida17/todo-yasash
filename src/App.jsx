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
       <h1>Todo Ammalari</h1>
       <input
        type="text" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTask}>Qo'shish</button>

      


     </div>
   )
 }
 
 export default App
 