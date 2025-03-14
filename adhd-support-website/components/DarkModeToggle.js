import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="absolute top-4 right-4">
      <button onClick={toggleDarkMode} className="bg-gray-800 text-white px-4 py-2 rounded">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}
