import Layout from "@/components/Layout";
import Image from "next/image";

const travels = [
    {
    title: "春の京都",
    date: "2024年4月",
    description: "哲学の道を桜吹雪の中歩いた。花より団子。団子より抹茶ソフト。",
    image: "/images/travel/kyoto.jpg",
    },

  // どんどん追加可能！
];

export default function Travel() {
    return (
        <Layout>
        <section className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6 text-center">旅の記録</h1>
            <p className="text-center text-gray-300 mb-10">
            絵手紙のように、旅先での思い出を残しています。
            </p>

            <div className="space-y-8">
            {travels.map((travel, idx) => (
                <div
                key={idx}
                className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row"
            >
                <div className="md:w-1/2 w-full h-64 relative">
                    <Image
                    src={travel.image}
                    alt={travel.title}
                    layout="fill"
                    objectFit="cover"
                />
                </div>
                <div className="p-6 md:w-1/2">
                    <h2 className="text-xl font-bold mb-2">{travel.title}</h2>
                    <p className="text-sm text-gray-500 mb-2">{travel.date}</p>
                    <p>{travel.description}</p>
                </div>
                </div>
            ))}
            </div>
        </section>
    </Layout>
    );
}
