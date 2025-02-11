import React from 'react';

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center text-gray-800 overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* メインコンテンツ */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center px-4">
        {/* 所属情報 - 左上に配置 */}
        <div className="absolute top-12 left-12 text-white/70 font-light tracking-wider">
          <p className="text-2xl mb-2">岐阜県出身</p>
          <p className="text-2xl">金沢大学融合学域先導学類</p>
        </div>

        {/* メインテーマ - 中央に大きく配置 */}
        <div className="w-full max-w-7xl">
          <h1 className="text-white text-7xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
            真に<span className="text-blue-400">ユーザーフレンドリー</span>な
          </h1>
          <div className="flex flex-wrap gap-4 text-6xl md:text-7xl font-bold tracking-tight text-white/90">
            <span className="block transform hover:scale-105 transition-transform duration-300">
              モノ、
            </span>
            <span className="block transform hover:scale-105 transition-transform duration-300">
              システム、
            </span>
            <span className="block transform hover:scale-105 transition-transform duration-300">
              コミュニティ
            </span>
            <span className="block text-blue-400 transform hover:scale-105 transition-transform duration-300">
              とは
            </span>
          </div>
        </div>

        {/* 装飾的な要素 - 右下に配置 */}
        <div className="absolute bottom-12 right-12 text-white/30 text-9xl font-bold leading-none" style={{ fontFamily: 'sans-serif' }}>
          UX
        </div>
      </div>

      {/* オーバーレイグリッド - 装飾的な背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" 
        style={{
          backgroundImage: 'linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}