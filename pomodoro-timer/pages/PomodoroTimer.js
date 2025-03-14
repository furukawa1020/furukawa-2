import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            setIsBreak(!isBreak);
            alert(isBreak ? 'Break time is over! Back to work!' : 'Work time is over! Take a break!');
            return isBreak ? 25 * 60 : 5 * 60; // Switch between work and break
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isBreak]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f4f8', height: '100vh' }}>
      <h1>Pomodoro Timer</h1>
      <div style={{ fontSize: '48px', margin: '20px 0' }}>{formatTime(time)}</div>
      <button onClick={() => setIsRunning(true)} disabled={isRunning}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => { setIsRunning(false); setTime(25 * 60); setIsBreak(false); }}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;
