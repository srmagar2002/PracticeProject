import { useState } from 'react';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

const handleAddTask = () => {
  if (newTask.trim() !== '') {
    setTasks(prevTasks => [
      { id: Date.now(), title: newTask, completed: false },
      ...prevTasks
    ]);
    setNewTask('');
  }
};
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
       <div className='App'>
      <div>
        <h1>To Do List</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
        </ul>
        </div>
    </>
  )
}

