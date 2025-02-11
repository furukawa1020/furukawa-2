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
        <p>Instagram: <a href="https://www.instagram.com/yourusername" className="text-blue-500">yourusername</a></p>
        <p>X (Twitter): <a href="https://twitter.com/yourusername" className="text-blue-500">yourusername</a></p>
        <p>Email: <a href="mailto:your.email@example.com" className="text-blue-500">your.email@example.com</a></p>
        <p>Facebook: <a href="https://www.facebook.com/yourusername" className="text-blue-500">yourusername</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" className="text-blue-500">yourusername</a></p>
      </div>
    </div>
  );
}