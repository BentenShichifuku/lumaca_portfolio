import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ImageSlider from '@/components/ImageSlider';

export default function Home() {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showHero && (
        <div className="fixed inset-0 z-50">
          <Hero />
        </div>
      )}
      <Layout>
        <div className={`${showHero ? 'invisible' : 'visible'} transition-opacity duration-500`}>
          <ImageSlider />
          {/* 他のセクションが続くならここに追加 */}
        </div>
      </Layout>
    </>
  );
}
