import React from 'react';

const articles = [
  { title: 'Understanding ADHD', summary: 'Learn about ADHD and its impact on daily life.' },
  { title: 'Tips for Staying Focused', summary: 'Discover strategies to improve focus and productivity.' },
  { title: 'Managing Time Effectively', summary: 'Explore techniques for better time management.' },
];

export default function Articles() {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Articles</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="text-gray-700">{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
