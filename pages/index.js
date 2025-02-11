import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  return (
    <>
      <Head>
        <title>Furukawa's Portfolio | Creative Technology Explorer</title>
        <meta name="description" content="Exploring the intersection of technology and human experience" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0B]"
      >
        {/* Dynamic Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" 
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: 'clamp(20px, 5vw, 50px) clamp(20px, 5vw, 50px)'
          }}
        />

        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between px-4 md:px-8 lg:px-16">
          {/* Top Section */}
          <motion.header 
            variants={itemVariants}
            className="pt-8 md:pt-12 flex justify-between items-center"
          >
            <span className="text-gray-400 font-space-grotesk text-lg md:text-xl tracking-wider">@furukawa</span>
            <nav className="hidden md:flex space-x-8">
              {['Projects', 'About', 'Contact'].map((item) => (
                <Link href={`/${item.toLowerCase()}`} key={item}>
                  <a className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </Link>
              ))}
            </nav>
          </motion.header>

          {/* Center Content */}
          <motion.div 
            style={{ opacity, scale }}
            className="flex-1 flex flex-col justify-center items-center text-center my-12 md:my-0"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-6 font-outfit leading-tight"
            >
              Creative<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Technology
              </span><br />
              Explorer
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-space-grotesk mb-12"
            >
              Crafting digital experiences that prioritize human connection 
              and emotional resonance over mere efficiency.
            </motion.p>

            {/* Mobile Navigation */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 md:hidden"
            >
              {['Projects', 'About', 'Contact'].map((item) => (
                <Link href={`/${item.toLowerCase()}`} key={item}>
                  <a className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 text-white">
                    {item}
                  </a>
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.footer 
            variants={itemVariants}
            className="py-8 text-center text-gray-500 font-space-grotesk"
          >
            <p className="text-sm">Scroll to explore</p>
          </motion.footer>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -bottom-20 -right-20 text-white text-[40vw] font-bold leading-none pointer-events-none select-none"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          UX
        </motion.div>
      </motion.div>
    </>
  );
}