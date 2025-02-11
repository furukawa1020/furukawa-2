import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [loadingKey, setLoadingKey] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleStart = () => {
      setIsRouteChanging(true);
      setLoading(true);
      setLoadingKey(prev => prev + 1);
    };

    const handleComplete = () => {
      setIsRouteChanging(false);
      setLoading(false);
    };

    const handleError = (err) => {
      setError(err.message);
      setLoading(false);
      setIsRouteChanging(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.61, 1, 0.88, 1]
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="description" content="Empathetic Warmth Project - Creating Beyond Efficiency" />
        <title>Empathetic Warmth Project</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="min-h-screen w-full bg-gradient-to-br from-white via-gray-50 to-gray-100" role="application">
        <nav className="fixed top-4 right-4 z-20">
          <div className="flex gap-4">
            <button 
              onClick={() => router.push('/projects')}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 bg-white/80 hover:bg-white rounded-lg shadow-sm transition-all duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => router.push('/about')}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 bg-white/80 hover:bg-white rounded-lg shadow-sm transition-all duration-300"
            >
              About
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 bg-white/80 hover:bg-white rounded-lg shadow-sm transition-all duration-300"
            >
              Contact
            </button>
          </div>
        </nav>
        {error && (
          <div role="alert" className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg">
            {error}
          </div>
        )}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-t-2 border-blue-400 rounded-full animate-spin" />
              <p className="mt-4 text-gray-800 font-space-grotesk">Loading...</p>
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.main
            key={router.route}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            className="min-h-screen w-full relative z-10"
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>

        <div 
          className="fixed bottom-0 right-0 text-[20vw] font-bold text-gray-200 pointer-events-none select-none"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          UX
        </div>

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-400 origin-left z-50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </>
  );
}

export default MyApp;


