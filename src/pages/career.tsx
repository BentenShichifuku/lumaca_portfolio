import Layout from "@/components/Layout";
import CareerCard from "@/components/CareerCard";
import { skills, experiences } from "@/data/careerData";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

export default function CareerPage() {
    return (
        <Layout>
        <section className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-2">就活・インターン</h1>
            <p className="text-gray-300 mb-6">
            スキル・自己紹介・インターンや研究活動の実績をまとめています。
            </p>

        {/* スキル一覧 */}
        <h2 className="text-2xl font-semibold mb-2">スキル</h2>
        <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, idx: Key | null | undefined) => (
                <span
                key={idx}
                className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm"
            >
                {skill}
                </span>
            ))}
        </div>

        {/* 経験・実績 */}
        <h2 className="text-2xl font-semibold mb-2">経験・実績</h2>
        <div>
            {experiences.map((exp: { title: string; period: string; description: string; }, idx: Key | null | undefined) => (
                <CareerCard
                key={idx}
                title={exp.title}
                period={exp.period}
                description={exp.description}
            />
            ))}
            </div>
        </section>
    </Layout>
    );
}
