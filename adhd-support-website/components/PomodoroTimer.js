import { useState, useEffect } from 'react';

export default function PomodoroTimer() {
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTime(1500);
    setIsActive(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Pomodoro Timer</h2>
      <div className="text-2xl mb-4">{formatTime(time)}</div>
      <button onClick={toggleTimer} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer} className="bg-gray-500 text-white px-4 py-2 rounded">
        Reset
      </button>
    </div>
  );
}
