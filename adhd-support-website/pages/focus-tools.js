import Head from 'next/head';
import Navbar from '../components/Navbar';
import PomodoroTimer from '../components/PomodoroTimer';
import WhiteNoise from '../components/WhiteNoise';
import TodoList from '../components/TodoList';

export default function FocusTools() {
  return (
    <div>
      <Head>
        <title>Focus Support Tools</title>
        <meta name="description" content="Tools to help improve focus for individuals with ADHD" />
      </Head>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Focus Support Tools</h1>
        <div className="mt-4">
          <PomodoroTimer />
          <WhiteNoise />
          <TodoList />
        </div>
      </main>
    </div>
  );
}
