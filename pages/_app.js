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
        <h1 className="text-5xl font-bold text-gray-800 mb-8">My Vision</h1>
        
        <div className="prose prose-lg">
          <p className="text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
            技術と社会の再設計で、生きててよかったと思える未来を。
          </p>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            人々が本当に感じる瞬間を大切にし、効率だけではなく、心が満たされる社会を築く。
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-6">My Approach</h2>
          <p className="text-lg text-gray-600 mb-8">
            ユーザーフレンドリーなシステムとコミュニティ、心に響くものづくりを通じて、
            直感的で温かみのある体験を提供する。
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-6">3つの柱</h2>
          <ul className="space-y-6 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-500 mr-4 text-xl">→</span>
              <div>
                <span className="font-semibold text-gray-800">ユーザーフレンドリーなデザイン</span>
                <p className="mt-2">直感的で親しみやすいシステムを構築し、誰もが使いやすい体験を提供。</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-4 text-xl">→</span>
              <div>
                <span className="font-semibold text-gray-800">共感とつながり</span>
                <p className="mt-2">人々が本当に感じられるコミュニティを創る。</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-4 text-xl">→</span>
              <div>
                <span className="font-semibold text-gray-800">心に響くものづくり</span>
                <p className="mt-2">効率偏重ではなく、感情や生活に寄り添った創造的なものづくり。</p>
              </div>
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
function ProjectsContent({ isDarkMode }) {  // isDarkModeを受け取る
  const projects = [
    {
      title: "スタック雪だるまチャン",
      description: "効率の外にある価値としての「カワイイ」を追求した、温かみのあるインタラクティブな雪だるまキャラクター。触れることで変化し、ユーザーとの対話を楽しむ体験を提供します。",
      image: "/images/snowman.jpg", // 雪だるまの画像パスを追加
      tags: ["スタックチャン", "インタラクションデザイン", "アニメーション", "AI"],
      link: "#" // プロジェクトのリンクを追加
    },
    {
      title: "フグ式膨張オブジェ",
      description: "これから開発を進めていく、ストレスリリーフを目的とした膨張・収縮するオブジェクト。ユーザーの感情状態を反映し、視覚的な癒しを提供することを目指しています。",
      image: "/images/puffer.jpg", // 膨張オブジェの画像パスを追加
      tags: ["3Dモデリング", "TPU", "EDAセンサー", "BLE通信", "マイクロポンプ"],
      link: "#"
    },
    {
      title: "真にユーザーフレンドリーなシステム",
      description: "これから進めていく、真にユーザーフレンドリーなシステムとコミュニティを追求する研究。効率だけでなく、人々が心地よく感じられる体験を提供することを目指しています。",
      image: "/images/community.jpg", // コミュニティシステムの画像パスを追加
      tags: ["ユーザーフレンドリー", "システムデザイン", "コミュニティ", "インタラクション"],
      link: "#"
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // アニメーション後にnullに設定
  };

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
            <motion.div
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden cursor-pointer ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`fixed inset-0 z-50 ${
                isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'
              }`}
            >
              <div className="absolute inset-0 overflow-y-auto">
                <ProjectModal
                  project={selectedProject}
                  onClose={handleModalClose}
                  isDarkMode={isDarkMode}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// 同じファイル内に追加
function ProjectModal({ project, onClose, isDarkMode }) {
  const [newLog, setNewLog] = useState('');
  const [logs, setLogs] = useState([]);
  const [media, setMedia] = useState([]);

  // ローカルストレージからデータを読み込む
  useEffect(() => {
    const loadSavedData = () => {
      const savedLogs = localStorage.getItem(`project-logs-${project.title}`);
      const savedMedia = localStorage.getItem(`project-media-${project.title}`);
      if (savedLogs) setLogs(JSON.parse(savedLogs));
      if (savedMedia) setMedia(JSON.parse(savedMedia));
    };
    loadSavedData();
  }, [project.title]);

  // データの変更をローカルストレージに保存
  useEffect(() => {
    localStorage.setItem(`project-logs-${project.title}`, JSON.stringify(logs));
  }, [logs, project.title]);

  useEffect(() => {
    localStorage.setItem(`project-media-${project.title}`, JSON.stringify(media));
  }, [media, project.title]);

  // ログの追加
  const handleAddLog = (e) => {
    e.preventDefault();
    if (!newLog.trim()) return;

    const newLogEntry = {
      id: Date.now(),
      text: newLog,
      date: new Date().toLocaleString('ja-JP'),
    };

    setLogs([newLogEntry, ...logs]);
    setNewLog('');
  };

  // メディアのアップロード
  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    const newMedia = files.map(file => ({
      id: Date.now() + Math.random(),
      type: file.type.startsWith('image/') ? 'image' : 'video',
      url: URL.createObjectURL(file),
      name: file.name,
      date: new Date().toLocaleString('ja-JP')
    }));
    setMedia([...newMedia, ...media]);
  };

  // キーボードイベントの追加
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // ダブルクリックで閉じる機能
  const handleDoubleClick = (e) => {
    if (e.detail === 2) { // ダブルクリック検出
      onClose();
    }
  };

  return (
    <div 
      className="min-h-screen p-4 md:p-8"
      onClick={handleDoubleClick}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className={`max-w-4xl mx-auto rounded-xl shadow-2xl ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}
      >
        {/* ヘッダー */}
        <div className={`sticky top-0 z-10 p-4 border-b flex justify-between items-center ${
          isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
        }`}>
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-gray-400 hover:text-white'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            ✕
          </button>
        </div>

        {/* コンテンツ */}
        <div className="p-6 space-y-8">
          {/* プロジェクト詳細 */}
          <div>
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDarkMode 
                      ? 'bg-blue-900/50 text-blue-200'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* メディアアップロード */}
          <div>
            <h3 className="text-xl font-bold mb-4">Progress Media</h3>
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={handleMediaUpload}
              className="hidden"
              id="media-upload"
            />
            <label
              htmlFor="media-upload"
              className={`inline-block px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                isDarkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              Add Media
            </label>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {media.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`relative rounded-lg overflow-hidden group ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  {item.type === 'image' ? (
                    <img src={item.url} alt="" className="w-full h-48 object-cover" />
                  ) : (
                    <video src={item.url} className="w-full h-48 object-cover" controls />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-xs bg-black/50 text-white">
                    {item.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ログ追加フォーム */}
          <div>
            <h3 className="text-xl font-bold mb-4">Progress Logs</h3>
            <form onSubmit={handleAddLog} className="mb-4">
              <textarea
                value={newLog}
                onChange={(e) => setNewLog(e.target.value)}
                className={`w-full p-3 rounded-lg border transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
                placeholder="Add a progress update..."
                rows="3"
              />
              <button
                type="submit"
                className={`mt-2 px-4 py-2 rounded-lg transition-colors ${
                  isDarkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Add Log
              </button>
            </form>

            <div className="space-y-4">
              {logs.map((log) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  <p className="mb-2">{log.text}</p>
                  <time className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {log.date}
                  </time>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* 閉じ方の説明を追加 */}
        <div className={`text-center py-4 text-sm ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          ダブルクリックまたはESCキーで戻る
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectLogs, setProjectLogs] = useState({});

  // ダークモードの状態をローカルストレージに保存
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  // ダークモード切り替え
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

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
        return <ProjectsContent isDarkMode={isDarkMode} />;  // isDarkModeを渡す
      case 'about':
        return <AboutContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return <ProjectsContent isDarkMode={isDarkMode} />;  // ここも同様
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

      <div className={`min-h-screen w-full transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900 text-gray-100' 
          : 'bg-white text-gray-900'
      }`}>
        {/* ダークモードトグル */}
        <button
          onClick={toggleDarkMode}
          className={`fixed top-4 left-4 z-20 p-3 rounded-lg transition-colors duration-300 ${
            isDarkMode
              ? 'bg-gray-800 text-gray-100 hover:bg-gray-700'
              : 'bg-white text-gray-900 hover:bg-gray-100 shadow-md'
          }`}
        >
          {isDarkMode ? '🌙' : '🌞'}  {/* アイコンを入れ替え */}
        </button>

        {/* ナビゲーション */}
        <nav className="fixed top-4 right-4 z-20">
          <div className="flex gap-4">
            {['projects', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-800 text-gray-100 hover:bg-gray-700'
                    : 'bg-white text-gray-900 hover:bg-gray-100 shadow-md'
                } ${currentPage === page && 'ring-2 ring-blue-500'}`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>
        </nav>

        {/* メインコンテンツ */}
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

        {/* UX背景テキスト */}
        <div 
          className={`fixed bottom-0 right-0 text-[20vw] font-bold pointer-events-none select-none transition-colors duration-300 ${
            isDarkMode ? 'text-gray-800' : 'text-gray-100'
          }`}
          style={{ fontFamily: 'Space Grotesk' }}
        >
          UX
        </div>

        {/* プログレスバー */}
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


