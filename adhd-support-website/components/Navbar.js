import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">ADHD Support</div>
        <div className="space-x-4">
          <Link href="/">
            <a className="text-white hover:text-gray-300">Home</a>
          </Link>
          <Link href="/focus-tools">
            <a className="text-white hover:text-gray-300">Focus Tools</a>
          </Link>
          <Link href="/articles">
            <a className="text-white hover:text-gray-300">Articles</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
