import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/globals.css';  // global.css から globals.css に変更

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // ページ遷移時のローディング状態管理
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  // ページトランジションの設定
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
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen w-full">
        {/* ローディングインジケーター */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-t-2 border-blue-500 rounded-full animate-spin" />
              <p className="mt-4 text-white font-space-grotesk">Loading...</p>
            </div>
          </motion.div>
        )}

        {/* メインコンテンツ */}
        <AnimatePresence mode="wait">
          <motion.main
            key={router.route}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            className="min-h-screen w-full"
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>

        {/* グローバルスクロールプログレス */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </>
  );
}

export default MyApp;


