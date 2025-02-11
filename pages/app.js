import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './styles/global.css';

export default function App({ Component, pageProps }) {
  // ページロード時のフェードインアニメーション（任意）
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* 固定ナビゲーションバー */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex space-x-6 py-4">
            <li>
              <Link href="/">
                <a className="text-white hover:text-gray-300 transition-colors duration-300">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="text-white hover:text-gray-300 transition-colors duration-300">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-white hover:text-gray-300 transition-colors duration-300">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-white hover:text-gray-300 transition-colors duration-300">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* 固定ナビゲーションの下に余白を作成 */}
      <div className="pt-20">
        <Component {...pageProps} />
      </div>
    </div>
  );
}


