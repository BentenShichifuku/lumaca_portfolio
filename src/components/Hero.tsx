import React, { useEffect, useState } from "react";

const Hero = () => {
    const [showLoading, setShowLoading] = useState(true);
    const [dotCount, setDotCount] = useState(0);
    const [snailFrame, setSnailFrame] = useState(0);

    // 2.2秒後にロード画面を非表示
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 2200);
        return () => clearTimeout(timer);
    }, []);

    // ドットアニメーション（... → . → .. → ...）
    useEffect(() => {
        const dotInterval = setInterval(() => {
            setDotCount((prev) => (prev + 1) % 4);
        }, 300);
        return () => clearInterval(dotInterval);
    }, []);

    // カタツムリアニメーション（2コマ）
    useEffect(() => {
        const frameInterval = setInterval(() => {
            setSnailFrame((prev) => (prev + 1) % 2);
        }, 300);
        return () => clearInterval(frameInterval);
    }, []);

    if (showLoading) {
        return (
            <section
                className="w-full h-screen flex flex-col items-center justify-center"
                style={{ backgroundColor: "#FFFDE7", fontFamily: '"DotGothic16", monospace' }} // ← ここを変更
            >
                <h1 className="text-5xl text-gray-800 mb-6">
                    now loading{".".repeat(dotCount)}
                </h1>
                <div className="w-24 h-24">
                    <img
                        src={`/snail${snailFrame + 1}.png`}
                        alt="snail walking"
                        className="w-full h-full object-contain"
                    />
                </div>
            </section>
        );
    }

};

export default Hero;
