import { useState } from 'react';
import './App.css';

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
        <h1 className="todo-title">Vazifalar Ro'yxati</h1>
        
        <div className="input-group">
          <input
            type="text"
            className="todo-input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Yangi reja qo'shing..."
          />
          <button onClick={addTask} className="add-button">
            {/* Plus (+) SVG Ikonkasi */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Qo'shish
          </button>
        </div>

        <ul className="todo-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Hozircha vazifalar yo'q...</p>
          ) : (
            tasks.map((el, index) => (
              <li key={index} className="todo-item">
                <span className="task-text">{el}</span>
                <button onClick={() => deleteBtn(index)} className="delete-button" title="O'chirish">
                  {/* Axlat qutisi (Trash) SVG Ikonkasi */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
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