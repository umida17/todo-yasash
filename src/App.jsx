import { useState } from 'react';
import './App.css'; // Alohida CSS faylni ulab qo'ydik

const App = () => {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (todo.trim() !== "") {
      setTasks([...tasks, todo]);
      setTodo("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const deleteBtn = (index) => {
    const newTodos = tasks.filter((_, i) => i !== index);
    setTasks(newTodos);
  };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <h1 className="todo-title">Todo Amallari</h1>
        
        <div className="input-group">
          <input
            type="text"
            className="todo-input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Yangi vazifa qo'shing..."
          />
          <button onClick={addTask} className="add-button">Qo'shish</button>
        </div>

        <ul className="todo-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Hozircha vazifalar yo'q...</p>
          ) : (
            tasks.map((el, index) => (
              <li key={index} className="todo-item">
                <span className="task-text">{el}</span>
                <button onClick={() => deleteBtn(index)} className="delete-button">
                  O'chirish
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;