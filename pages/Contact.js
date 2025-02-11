"use client";

export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col items-center text-gray-800">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-image"
        style={{ backgroundImage: "url('/images/projects-bg.jpg')" }}
      ></div>

      {/* タイトル */}
      <h1 className="relative z-10 text-7xl font-bold mt-20 bg-white bg-opacity-70 p-5 rounded-lg shadow-lg">
        Contact Me
      </h1>

      {/* 連絡先情報 */}
      <div className="relative z-10 mt-10 p-5 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <p>GitHub: <a href="https://github.com/furukawa1020" target="_blank" className="text-blue-500 hover:underline">GitHub</a></p>
        <p>Twitter (X): <a href="https://x.com/HATAKE55555" target="_blank" className="text-blue-500 hover:underline">Twitter (X)</a></p>
        <p>Email: <a href="mailto:f.kotaro.0530@gmail.com" className="text-blue-500 hover:underline">f.kotaro.0530@gmail.com</a></p>
      </div>
    </div>
  );
}