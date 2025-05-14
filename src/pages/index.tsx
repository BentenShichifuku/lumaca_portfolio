import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ImageSlider from '@/components/ImageSlider';
import SiteCard, { SiteInfo } from '@/components/SiteCard';

export default function Home() {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // サイト紹介用の情報
  const siteInfo: SiteInfo = {
    name: "lumaca",
    description: "おいしいもの巡りの足跡",
    logo: "/images/logo.jpg",
    category: "blog"
  };

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
          {/* サイト紹介カード */}
          <div className="mt-8 flex justify-center">
            <SiteCard site={siteInfo} />
          </div>
          {/* 他のセクションが続く場合はここに追加 */}
        </div>
      </Layout>
    </>
  );
}
