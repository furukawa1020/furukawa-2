export default function ArticleList() {
  const articles = [
    { title: 'Understanding ADHD', summary: 'An overview of ADHD and its symptoms.' },
    { title: 'Time Management Tips', summary: 'Effective strategies for managing time with ADHD.' },
    { title: 'Focus Techniques', summary: 'Techniques to improve focus and concentration.' },
  ];

  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <h2 className="text-xl font-bold mb-2">Articles</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
