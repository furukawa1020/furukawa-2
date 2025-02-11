"use client";
import React, { useState } from 'react';
import Upload from "../src/components/Upload";

export default function Projects() {
  const [media, setMedia] = useState([]);

  const handleUpload = (files) => {
    const newMedia = Array.from(files).map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type,
      title: '',
      description: ''
    }));
    setMedia([...media, ...newMedia]);
  };

  return (
    <div className="min-h-screen p-8 bg-[#f4d03f]"> {/* コルクボードのような暖かい色 */}
      {/* コルクボードテクスチャのオーバーレイ */}
      <div className="absolute inset-0 bg-repeat opacity-30"
        style={{
          backgroundImage: `url('/images/cork-texture.png')`,
          pointerEvents: 'none'
        }}
      />

      <h1 className="relative text-4xl font-bold mb-8 text-gray-800 text-center">
        <span className="bg-white px-6 py-2 rounded shadow-md transform -rotate-2 inline-block">
          My Projects
        </span>
      </h1>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {media.map((item, index) => (
          <div key={index} 
            className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
            style={{
              transform: `rotate(${Math.random() * 6 - 3}deg)` // ランダムな角度で傾ける
            }}
          >
            {item.type.includes('video') ? (
              <video src={item.url} controls className="w-full h-48 object-cover rounded-lg mb-4" />
            ) : (
              <img src={item.url} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
            )}
            <input
              type="text"
              placeholder="プロジェクト名"
              className="w-full mb-2 p-2 border rounded"
              onChange={(e) => {
                const newMedia = [...media];
                newMedia[index].title = e.target.value;
                setMedia(newMedia);
              }}
            />
            <textarea
              placeholder="プロジェクトの説明"
              className="w-full p-2 border rounded"
              rows="3"
              onChange={(e) => {
                const newMedia = [...media];
                newMedia[index].description = e.target.value;
                setMedia(newMedia);
              }}
            />
          </div>
        ))}
      </div>

      {/* アップロードボタン */}
      <div className="fixed bottom-8 right-8">
        <Upload onUpload={handleUpload} />
      </div>
    </div>
  );
}