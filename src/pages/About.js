"use client";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center text-gray-800">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-image"
        style={{ backgroundImage: "url('/images/projects-bg.jpg')" }}
      ></div>

      {/* タイトル */}
      <h1 className="relative z-10 text-7xl font-bold mt-20 bg-white bg-opacity-70 p-5 rounded-lg shadow-lg">
        About Me
      </h1>

      {/* 自己紹介 */}
      <div className="relative z-10 mt-10 p-5 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <p>こんにちは！私は[あなたの名前]です。私は[あなたの職業や趣味]をしています。</p>
        <p>このウェブサイトでは、私の活動や作ったものの写真や動画、コードなどを記録しています。</p>
        <p>「共感的ぬくもり」や「効率の外の価値」を大切にし、ユーザーにとって心地よい体験を提供することを目指しています。</p>
      </div>
    </div>
  );
}