"use client";
import React from 'react';

export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col items-center text-gray-800">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-image"
        style={{ 
          backgroundImage: "url('/images/projects-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.7'
        }}
      ></div>

      {/* コンテンツ */}
      <div className="relative z-10 w-full max-w-4xl px-4 py-20">
        <h1 className="text-6xl font-bold mb-12 text-center bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          Contact
        </h1>

        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <div className="space-y-12">
            {/* SNSアカウント */}
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-semibold text-gray-700 mb-8">SNSアカウント</h2>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
                <a 
                  href="https://github.com/furukawa1020" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-xl bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition transform hover:scale-105"
                >
                  GitHub
                </a>
                <a 
                  href="https://x.com/HATAKE55555" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
                >
                  Twitter（X）
                </a>
              </div>
            </div>

            {/* メールアドレス */}
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-semibold text-gray-700 mb-8">メールアドレス</h2>
              <a 
                href="mailto:f.kotaro.0530@gmail.com"
                className="block text-2xl text-blue-600 hover:text-blue-800 transition transform hover:scale-105"
              >
                f.kotaro.0530@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}