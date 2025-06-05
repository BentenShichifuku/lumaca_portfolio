import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ImageSlider from '@/components/ImageSlider';
import { SiteInfo } from '@/components/SiteCard';
import CardCarousel from '@/components/CardCarousel';
import { Profile } from '@/data/editors';

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
    logo: "/logo.jpg",
    category: "blog",
    url: "https://example.com",
  };

  // エディター情報
  const editors: Profile[] = [
    {
      name: "Editor 1",
      image: "/images/editor1.jpg",
      affiliation: "所属1",
      email: "editor1@example.com",
      portfolio: "https://portfolio1.example.com"
    },
    {
      name: "Editor 2",
      image: "/images/editor2.jpg",
      affiliation: "所属2",
      email: "editor2@example.com",
      portfolio: "https://portfolio2.example.com"
    }
  ];

  return (
    <>
      {showHero && (
        <div className="fixed inset-0 z-50">
          <Hero />
        </div>
      )}
      <Layout>
        <div className={`${showHero ? 'invisible' : 'visible'} transition-opacity duration-700 min-h-screen`}>
          <div className="pt-8">
            <ImageSlider />
          </div>
          {/* カルーセル */}
          <div className="my-40 px-20">
            <CardCarousel siteInfo={siteInfo} editors={editors} />
          </div>
          {/* 他のセクションが続く場合はここに追加 */}
        </div>
      </Layout>
    </>
  );
}
