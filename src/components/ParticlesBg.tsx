import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
    const particlesInit = useCallback(async (engine: any) => {
        // エンジンにプラグイン読み込み
        await loadFull(engine);
    }, []);

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
            background: {
            color: "#000000",
            },
            particles: {
            color: {
                value: "#facc15", // 黄色 (#facc15 = Tailwind yellow-400)
            },
            links: {
                enable: true,
                color: "#facc15",
            },
            move: {
                enable: true,
                speed: 1,
            },
            number: {
                value: 80,
            },
            opacity: {
                value: 0.7,
            },
            size: {
                value: 3,
            },
            },
            fullScreen: {
            enable: true,
            zIndex: -1, // 背景に配置
            },
        }}
        />
    );
};

export default ParticlesBg;
