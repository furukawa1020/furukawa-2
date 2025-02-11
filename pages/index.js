//// filepath: /c:/Users/wakuw/OneDrive/画像/デスクトップ/.vscode/empathetic-warmth-project/pages/index.js
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <h1 className="text-6xl font-bold mb-6 text-white">Hello, Myポートフォリオへ</h1>
      <p className="text-xl text-white mb-8 text-center">
        このポートフォリオは、効率以上の温かみと創造性を記録するためのプロジェクトです。
      </p>
      <div className="flex space-x-4">
        <Link href="/projects">
          <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Projects</a>
        </Link>
        <Link href="/about">
          <a className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">About</a>
        </Link>
        <Link href="/contact">
          <a className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">Contact</a>
        </Link>
      </div>
    </div>
  );
}