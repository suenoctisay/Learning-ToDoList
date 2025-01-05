import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !category) return;
    addTodo(text, category);
    setText('');
    setCategory('');
  }

  return (
    <div className='todo-form'>
      <h2>Create Tasks</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='What is your next task?'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=''>Select a category</option>
          <option value='work'>Work</option>
          <option value='personal'>Personal</option>
          <option value='study'>Study</option>
        </select>
        <button className='btn-create' type='submit'>Create</button>
      </form>
    </div>
  )
}

export default TodoForm
