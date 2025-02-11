import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/globals.css';

// Aboutページのコンテンツ
function AboutContent() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-8">About</h1>
        
        <div className="prose prose-lg">
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Empathetic Warmth Projectは、効率性を超えた価値を創造することを目指しています。
            人々の感情や経験を大切にしながら、テクノロジーの可能性を追求します。
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-600 mb-8">
            テクノロジーを通じて、より温かみのある、共感に満ちた世界を作ることを目指しています。
            効率だけでなく、使う人の気持ちに寄り添うソリューションを提供します。
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Our Approach</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>人間中心のデザイン思考</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>持続可能な技術革新</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>共感を基盤とした開発プロセス</span>
            </li>
          </ul>
        </div>

        <motion.div 
          className="mt-16 p-6 bg-blue-50 rounded-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
          <p className="text-gray-600">
            プロジェクトについてのご質問や協力のご提案など、お気軽にお問い合わせください。
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Contactページのコンテンツを更新
function ContactContent() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/furukawa1020',
      icon: '🐱',
      bgColor: 'bg-gray-800',
      hoverColor: 'hover:bg-gray-700'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/HATAKE55555',
      icon: '𝕏',
      bgColor: 'bg-black',
      hoverColor: 'hover:bg-gray-900'
    },
    {
      name: 'Email',
      url: 'mailto:f.kotaro.0530@gmail.com',
      icon: '✉️',
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/12EKCronSYw/',
      icon: '👥',
      bgColor: 'bg-blue-800',
      hoverColor: 'hover:bg-blue-900'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ko102012',
      icon: '📸',
      bgColor: 'bg-pink-600',
      hoverColor: 'hover:bg-pink-700'
    }
  ];

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-8">Contact</h1>
        
        {/* ソーシャルメディアリンク */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.bgColor} ${link.hoverColor} text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 transform transition-all duration-300 hover:-translate-y-1`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="text-lg font-medium">{link.name}</span>
            </motion.a>
          ))}
        </div>

        {/* コンタクトフォーム */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                お名前
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="山田 太郎"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                メールアドレス
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                メッセージ
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                id="message"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>
            
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors duration-300"
                type="submit"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

// Projectsページのコンテンツの改善
function ProjectsContent() {
  const projects = [
    {
      title: "empathetic-warmth-project",
      description: "人々の感情や経験を大切にする、共感に基づいたWebアプリケーション",
      image: "/path-to-image.jpg", // 実際のプロジェクト画像パスに更新
      tags: ["Next.js", "TailwindCSS", "Framer Motion"],
      link: "https://github.com/yourusername/empathetic-warmth-project"
    },
    // 他の実際のプロジェクトを追加
  ];

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-12">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* プロジェクトカードの内容 */}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [loadingKey, setLoadingKey] = useState(0);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

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

  // ページ遷移のロジックを修正
  const renderContent = () => {
    switch (currentPage) {
      case 'projects':
        return <ProjectsContent />;
      case 'about':
        return <AboutContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return <ProjectsContent />; // デフォルトをProjectsページに設定
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

      {/* メインコンテナの背景色を明るく調整 */}
      <div className="min-h-screen w-full bg-white" role="application">
        {/* ナビゲーションの背景色を調整 */}
        <nav className="fixed top-4 right-4 z-20">
          <div className="flex gap-4">
            <button 
              onClick={() => setCurrentPage('projects')}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 bg-white shadow-sm hover:shadow-md rounded-lg transition-all duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 bg-white shadow-sm hover:shadow-md rounded-lg transition-all duration-300"
            >
              About
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 bg-white shadow-sm hover:shadow-md rounded-lg transition-all duration-300"
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
            key={currentPage}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            className="min-h-screen w-full relative z-10"
          >
            {renderContent()}
          </motion.main>
        </AnimatePresence>

        {/* 背景のUXテキストを薄く調整 */}
        <div 
          className="fixed bottom-0 right-0 text-[20vw] font-bold text-gray-100 pointer-events-none select-none"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          UX
        </div>

        {/* プログレスバーの色を調整 */}
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


