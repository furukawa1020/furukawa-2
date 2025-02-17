/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // フォントファミリーの設定
      fontFamily: {
        'outfit': ['var(--font-outfit)'],
        'space-grotesk': ['var(--font-space-grotesk)'],
      },
      // グラデーションの設定
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
      // アニメーションの設定
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      // トランジションの設定
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      // カスタムカラーの設定
      colors: {
        gray: {
          850: '#1f2937',
        },
      },
      // スクロールバーのカスタマイズ用の設定
      fontSize: {
        'dynamic-base': 'calc(14px + 0.390625vw)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    // スクロールバーのカスタマイズプラグイン
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  variants: {
    extend: {
      // ホバー、フォーカス、ダークモードのバリアント
      backgroundColor: ['hover', 'focus', 'dark'],
      textColor: ['hover', 'focus', 'dark'],
      opacity: ['hover', 'focus'],
      scale: ['hover', 'group-hover'],
      transform: ['hover', 'focus'],
      backdropBlur: ['hover'],
    },
  },
};