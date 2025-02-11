import React from 'react';
import Link from 'next/link';
import './styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <nav className="bg-gray-800 p-4 shadow-lg">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="text-white">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="text-white">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-white">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-white">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}