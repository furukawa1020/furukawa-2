import Head from 'next/head';
import Navbar from '../components/Navbar';
import ArticleList from '../components/ArticleList';

export default function Articles() {
  return (
    <div>
      <Head>
        <title>ADHD Articles</title>
        <meta name="description" content="Articles beneficial for individuals with ADHD" />
      </Head>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold">ADHD Articles</h1>
        <ArticleList />
      </main>
    </div>
  );
}
