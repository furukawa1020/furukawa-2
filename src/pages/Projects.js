import { useState } from "react";
import Upload from "../components/Upload";

export default function Projects() {
  const [media, setMedia] = useState([]);

  const handleUpload = (newMedia) => {
    setMedia([...media, ...newMedia]);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center text-white">
      <div 
        className="absolute inset-0 bg-image"
        style={{ backgroundImage: "url('/images/projects-bg.jpg')" }}
      ></div>

      <h1 className="relative z-10 text-7xl font-bold mt-20 bg-black bg-opacity-50 p-5 rounded-lg shadow-lg">
        My Projects
      </h1>

      <Upload onUpload={handleUpload} />

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {media.map((src, index) => (
          <div key={index} className="p-2 bg-black bg-opacity-50 rounded-lg">
            {src.includes("video") ? (
              <video src={src} controls className="w-48 h-48 object-cover" />
            ) : (
              <img src={src} className="w-48 h-48 object-cover rounded-lg" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}