'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type ImageData = {
  src: string;
  caption: string;
};

const images: ImageData[] = [
  {
    src: '/images/gourmet/fortissimo_h.jpg',
    caption: '2025/03/28 at fortissimo h',
  },
  {
    src: '/images/gourmet/kitazumi.jpg',
    caption: '2024/11/08 at kitazumi',
  },
  {
    src: '/images/gourmet/yokoi.jpg',
    caption: '2025/05/11 at yokoi',
  },
];

export default function ImageSlider() {
  const [index, setIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isHeroVisible, setIsHeroVisible] = useState<boolean>(true);

  // 文字表示用のインデックスとintervalをrefで管理
  const charIndexRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Hero終了後にスライダーを表示
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroVisible(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // 説明文を一文字ずつ表示
  useEffect(() => {
    if (isHeroVisible) return;
    const caption = images[index].caption;
    setDisplayedText('');
    charIndexRef.current = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (charIndexRef.current < caption.length) {
        setDisplayedText(caption.substring(0, charIndexRef.current + 1));
        charIndexRef.current += 1;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [index, isHeroVisible]);

  return (
    <div className="min-h-screen flex items-center justify-center py-28 px-4">
      <div className="relative flex items-center justify-center w-[880px] h-[880px]">
        {/* 左矢印 */}
        <button
          onClick={prevImage}
          className="absolute -left-20 bg-[#fff1b8] border border-gray-300 rounded-full w-14 h-14 flex items-center justify-center shadow-md hover:bg-yellow-200 z-10"
        >
          <span className="text-2xl font-bold">{'◀'}</span>
        </button>

        <div className="flex flex-col items-center space-y-4">
          {/* 説明文 */}
          {!isHeroVisible && (
            <div
              className="text-2xl font-[Playwrite DK Loopet] text-[#1a1a2e] text-center h-10"
              style={{ fontFamily: 'Playwrite DK Loopet, cursive' }}
            >
              {displayedText}
            </div>
          )}

          {/* 写真 */}
          <div className="relative w-[880px] h-[880px] p-6 bg-[#fff9db] rounded-xl shadow-md">
            <div className="w-full h-full relative">
              <Image
                key={index}
                src={images[index].src}
                alt={images[index].caption}
                fill
                style={{ 
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                }}
                className="rounded-md transition-transform duration-300 hover:scale-[1.02]"
                sizes="(max-width: 880px) 100vw, 880px"
                priority
              />
            </div>
          </div>
        </div>

        {/* 右矢印 */}
        <button
          onClick={nextImage}
          className="absolute -right-20 bg-[#fff1b8] border border-gray-300 rounded-full w-14 h-14 flex items-center justify-center shadow-md hover:bg-yellow-200 z-10"
        >
          <span className="text-2xl font-bold">{'▶'}</span>
        </button>
      </div>
    </div>
  );
}
