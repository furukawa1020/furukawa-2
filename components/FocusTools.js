import React, { useState } from 'react';

export default function FocusTools() {
  const [timer, setTimer] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const startTimer = () => {
    setIsRunning(true);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          setIsRunning(false);
          return 25 * 60;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Focus Tools</h2>
      <div className="mb-4">
        <h3 className="text-xl">Pomodoro Timer</h3>
        <div className="flex items-center">
          <span className="text-3xl">{Math.floor(timer / 60)}:{('0' + (timer % 60)).slice(-2)}</span>
          <button
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={startTimer}
            disabled={isRunning}
          >
            {isRunning ? 'Running...' : 'Start'}
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-xl">To-Do List</h3>
        <div className="flex items-center mb-2">
          <input
            type="text"
            className="border p-2 flex-grow"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="border-b py-1">{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
