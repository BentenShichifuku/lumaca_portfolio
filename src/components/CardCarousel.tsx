import { useState, useEffect } from 'react';
import SiteCard, { SiteInfo } from './SiteCard';
import EditorCard from './EditorCard';
import { Profile } from '../data/editors';

type CardCarouselProps = {
  siteInfo: SiteInfo;
  editors: Profile[];
};

export default function CardCarousel({ siteInfo, editors }: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(1); // 1: SiteCard, 0: 左のEditorCard, 2: 右のEditorCard
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? 2 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative w-[66vw] mx-auto h-[500px] flex items-center justify-center perspective-1000">
      {/* 左矢印 */}
      <button
        onClick={handlePrev}
        className="absolute -left-0 z-50 bg-[#fff1b8] border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-yellow-200"
      >
        <span className="text-xl font-bold">{'◀'}</span>
      </button>

      {/* カード表示エリア */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* 左のEditorCard */}
        <div
          className={`absolute transform transition-all duration-500 ${
            currentIndex === 0
              ? 'scale-100 translate-x-0 opacity-100 z-30'
              : currentIndex === 1
              ? 'scale-[0.85] -translate-x-[30%] opacity-50 z-20'
              : currentIndex === 2
              ? 'scale-[0.85] translate-x-[30%] opacity-50 z-20'
              : 'scale-[0.85] translate-x-[30%] opacity-0 z-10'
          }`}
          style={{ transformOrigin: 'center center' }}
        >
          <div className="transform scale-[0.55]">
            <EditorCard profile={editors[0]} />
          </div>
        </div>

        {/* 中央のSiteCard */}
        <div
          className={`absolute transform transition-all duration-500 ${
            currentIndex === 1
              ? 'scale-100 translate-x-0 opacity-100 z-30'
              : currentIndex === 2
              ? 'scale-[0.85] -translate-x-[30%] opacity-50 z-20'
              : currentIndex === 0
              ? 'scale-[0.85] translate-x-[30%] opacity-50 z-20'
              : 'scale-[0.85] translate-x-[30%] opacity-0 z-10'
          }`}
          style={{ transformOrigin: 'center center' }}
        >
          <div className="transform scale-[0.55]">
            <SiteCard site={siteInfo} />
          </div>
        </div>

        {/* 右のEditorCard */}
        <div
          className={`absolute transform transition-all duration-500 ${
            currentIndex === 2
              ? 'scale-100 translate-x-0 opacity-100 z-30'
              : currentIndex === 0
              ? 'scale-[0.85] -translate-x-[30%] opacity-50 z-20'
              : currentIndex === 1
              ? 'scale-[0.85] translate-x-[30%] opacity-50 z-20'
              : 'scale-[0.85] -translate-x-[30%] opacity-0 z-10'
          }`}
          style={{ transformOrigin: 'center center' }}
        >
          <div className="transform scale-[0.55]">
            <EditorCard profile={editors[1]} />
          </div>
        </div>
      </div>

      {/* 右矢印 */}
      <button
        onClick={handleNext}
        className="absolute -right-0 z-50 bg-[#fff1b8] border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-yellow-200"
      >
        <span className="text-xl font-bold">{'▶'}</span>
      </button>
    </div>
  );
} 