import { useState } from 'react';

import './App.css';

import Todo from './components/todo';
import TodoForm from './components/todo-form';
import Search from './components/search';
import Filter from './components/filter';


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

  const addTodo = (text, category) => {
    const newTodo = { 
      id: Math.floor(Math.random() * 1000),
      text, 
      category,
      isCompleted: false,
    };
    setTodo([...todo, newTodo]);
  };

  const removeTodo = (id) => {
    const newTodo = [...todo].filter(
      (todo) => todo.id !== id ? todo : null
    );
    setTodo(newTodo);
  }

  const completeTodo = (id) => {
    const newTodo = [...todo].map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodo (newTodo);
  }

  const [search, setSearch] = useState('');

  const [filter, setFilter] = useState('all');
  const [sort , setSort] = useState('asc');

  return (
    <div className="app">
      <h1 className="title">Task List</h1>
      {/* SEARCH */}
      <Search 
        search={search}
        setSearch={setSearch}
      />

      {/* FILTER */}
      <Filter 
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      {/* TODO LIST */}
      <div className="todo-list">
        {todo
          .filter((todo) => 
            filter === 'all' 
              ? todo 
              : filter === 'active' 
              ? !todo.isCompleted 
              : todo.isCompleted
          )
          .filter((todo) => 
            todo.text.toLowerCase().includes(search.toLowerCase()
          ))
          .map((todo) => (
            < Todo 
              key={todo.id} 
              todo={todo} 
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))
        }
      </div>

      {/* ADD TASK */}
      < TodoForm 
        addTodo={addTodo}
      />
    </div>
  );
}

export default App