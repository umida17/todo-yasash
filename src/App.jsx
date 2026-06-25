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


  const deleteBtn = (index) => {
    const newTodos = tasks.filter((_, i) => i !== index);
    setTasks(newTodos);
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

      <ul>
        {tasks.map((el,index)=>(
          <li key={index}>
            {el}
            <button onClick={() => deleteBtn(index)}>Delete</button>
          </li>
        ))}
      </ul>


     </div>
   )
 }
 
 export default App
 