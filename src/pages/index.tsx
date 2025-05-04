import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ProfileCard />
    </Layout>
  );
}
