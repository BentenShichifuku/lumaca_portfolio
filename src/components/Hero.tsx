import React from "react";
import Link from "next/link";

const navLinks = [
    { label: "Career", path: "career" },
    { label: "Research", path: "research" },
    { label: "Tech", path: "tech" },
    { label: "Creative", path: "creative" },
    { label: "Hobby", path: "hobby" },
];

const Hero = () => {
    return (
        <section className="relative w-full h-screen bg-sky-100 text-gray-900 flex items-center justify-center">
        <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to BraveBird
            </h1>

        {/* 🎯 Main navigation buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
            {navLinks.map(({ label, path }, idx) => (
                <Link key={idx} href={`/${path}`}>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition">
                    {label}
                </button>
                </Link>
            ))}
        </div>

        {/* 🎯 SNS links */}
        <div className="flex justify-center gap-6 text-2xl">
            <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            >
            <i className="devicon-github-original" />
            </a>
            <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
            >
            <i className="devicon-twitter-original" />
            </a>
            <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
            >
            <i className="devicon-instagram-plain" />
            </a>
            </div>
        </div>
    </section>
    );
};

export default Hero;
