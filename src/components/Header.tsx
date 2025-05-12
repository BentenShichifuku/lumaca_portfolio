import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <header
            className={`p-4 text-sky-900 sticky top-0 z-50 transition-all duration-300 ${
                isHovered ? "shadow-md" : ""
            }`}
            style={{
                backgroundColor: isHovered ? '#fff9db' : '#ffffe7',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-semibold hover:text-sky-500">
                    lumaca
                </Link>
                <nav className="space-x-4 text-sm md:text-base font-medium">
                    <Link href="/archives/gourmet" className="hover:text-sky-500">Archives</Link>
                    <Link href="/others" className="hover:text-sky-500">Others</Link>
                </nav>
            </div>
        </header>
    );
}
