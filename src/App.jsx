import { useState } from 'react';

import './App.css';

import Todo from './components/todo';
import TodoForm from './components/todo-form';


function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "Finish yesterday's task about js",
      category: "Work",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Go to gym",
      category: "Personal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Start my react studies",
      category: "Study",
      isCompleted: true,
    },
  ]);

  return (
    <div className="app">
      <h1 className="title">Task List</h1>
      {/* TAKS LIST */}
      <div className="todo-list">
        {todo.map((todo) => (
          < Todo 
            key={todo.id} 
            todo={todo} 
          />
        ))}
      </div>
    </div>
  );
}

export default App