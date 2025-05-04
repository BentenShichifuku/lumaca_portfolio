// src/components/Hero.tsx
import React, { useEffect, useState } from "react";

const Hero = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        const newOpacity = Math.max(1 - scrollY / 300, 0); // 300pxスクロールで消える
        setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
        className="w-full h-screen bg-sky-100 text-gray-900 flex items-center justify-center transition-opacity duration-500"
        style={{ opacity }}
        >
        <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to BraveBird</h1>
        </div>
        </section>
    );
};

export default Hero;
