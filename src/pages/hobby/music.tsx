import Layout from "@/components/Layout";

export default function Music() {
    return (
    <Layout>
        <section className="max-w-3xl mx-auto py-12 px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">My Favorite Music</h1>
            <p className="mb-6 text-gray-300">
            最近よく聴いているApple Musicのプレイリストです。
            </p>

        {/* 🎵 Apple Music埋め込み */}
        <div className="w-full aspect-video mb-6">
            <iframe
                allow="autoplay *; encrypted-media *;"
                frameBorder="0"
                height="450"
                style={{ width: "100%", maxWidth: 660, overflow: "hidden", background: "transparent" }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/jp/playlist/あなたのID"
            ></iframe>
        </div>

        <p className="text-sm text-gray-400">
            ※ iPhoneやMacで開くと、Apple Musicアプリで再生できます。
        </p>
        </section>
    </Layout>
    );
}
