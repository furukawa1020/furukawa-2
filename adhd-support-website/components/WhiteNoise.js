import { useState } from 'react';

export default function WhiteNoise() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio('/white-noise.mp3');

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <h2 className="text-xl font-bold mb-2">White Noise</h2>
      <button onClick={togglePlay} className="bg-blue-500 text-white px-4 py-2 rounded">
        {isPlaying ? 'Stop' : 'Play'}
      </button>
    </div>
  );
}
