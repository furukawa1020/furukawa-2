import React from 'react';

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center text-gray-800">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-image"
        style={{ 
          backgroundImage: "url('/images/projects-bg.jpg')",  // この画像が public/images/ に存在するか確認
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.7'
        }}
      ></div>

      {/* コンテンツ */}
      <div className="relative z-10 w-full max-w-4xl px-4 py-20">
        <h1 className="text-6xl font-bold mb-8 text-center bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          About Me
        </h1>

        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg space-y-6">
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-700">自己紹介</h2>
            <p className="text-lg leading-relaxed">
              温かみのある創造的な体験を大切にしています。効率だけでなく、人々の心に響く瞬間を作りたいと考えています。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-700">スキル・経験</h2>
            <p className="text-lg leading-relaxed">
              ウェブ開発、デザイン、プロジェクトマネジメントなどの経験を活かし、技術と創造性の調和を目指しています。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-700">価値観</h2>
            <p className="text-lg leading-relaxed">
              「共感的ぬくもり」をテーマに、効率性だけでなく、人々の心に寄り添うプロジェクトを展開しています。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}