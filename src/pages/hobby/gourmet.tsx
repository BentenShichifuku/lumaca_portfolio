import Layout from "@/components/Layout";
import Image from "next/image";

export default function GourmetPage() {
    return (
        <Layout>
        <div className="max-w-2xl mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold mb-6">美食会page</h1>
            <p className="text-lg mb-6">わたしたちは"Lumaca"です</p>

        <a
            href="https://example.com/lumaca" // ← 本当のURLに差し替えてね！
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition transform hover:scale-105"
        >
            <Image
                src="/images/lumaca-icon.png" // public/images に置いた画像名に合わせて！
                alt="Lumaca Icon"
                width={120}
                height={120}
                className="rounded-full shadow-md"
            />
        </a>
        </div>
    </Layout>
    );
}
