// src/pages/hobby/index.tsx
import Link from "next/link";
import Layout from "@/components/Layout";

const hobbies = [
    { label: "美食会", path: "/hobby/gourmet" },
    { label: "FAS", path: "/hobby/fashion" },
    { label: "Volleyball", path: "/hobby/volleyball" },
    { label: "Travel", path: "/hobby/travel" },
    { label: "Music", path: "/hobby/music" },
    { label: "+++", path: "/hobby/more" },
];

export default function HobbyTopPage() {
    return (
        <Layout>
        <div className="text-center py-20 px-4">
            <h1 className="text-4xl font-bold mb-8">My Hobbies</h1>
            <p className="mb-6 text-gray-600">気になる趣味をクリック！</p>
            <div className="flex flex-wrap justify-center gap-4">
            {hobbies.map((hobby, idx) => (
                <Link key={idx} href={hobby.path}>
                <button className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded shadow">
                    {hobby.label}
                </button>
            </Link>
            ))}
            </div>
        </div>
        </Layout>
    );
}
