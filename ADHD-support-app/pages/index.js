import Head from 'next/head';
import FocusTools from '../components/FocusTools';
import Articles from '../components/Articles';
import UserManagement from '../components/UserManagement';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ADHD Support App</title>
        <meta name="description" content="Support tools for ADHD" />
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to the ADHD Support App</h1>
        <UserManagement />
        <FocusTools />
        <Articles />
      </main>
    </div>
  );
}
