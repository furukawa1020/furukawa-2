import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ADHD Support</title>
        <meta name="description" content="ADHD support website" />
      </Head>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Welcome to ADHD Support</h1>
        <p className="mt-4">This is a platform designed to help individuals with ADHD manage their daily tasks and improve focus.</p>
      </main>
    </div>
  );
}
