// src/pages/hobby/index.tsx
import Link from "next/link";
import Layout from "@/components/Layout";

const hobbies = [
    { title: "Gourmet", url: "/hobby/gourmet" },
    { title: "Travel", url: "/hobby/travel" },
    { title: "Music", url: "/hobby/music" },
    { title: "+++", url: "#" },
];

export default function HobbyTopPage() {
    return (
        <Layout>
        <div className="text-center py-20 px-4">
            <h1 className="text-4xl font-bold mb-8">My Hobbies</h1>
            <p className="mb-6 text-gray-600">気になる趣味をクリック！</p>
            <div className="flex flex-wrap justify-center gap-4">
            {hobbies.map((hobby, idx) => (
                <Link key={idx} href={hobby.url}>
                <button className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded shadow">
                    {hobby.title}
                </button>
            </Link>
            ))}
            </div>
        </div>
        </Layout>
    );
}
