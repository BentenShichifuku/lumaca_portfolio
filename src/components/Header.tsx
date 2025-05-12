import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [showArchives, setShowArchives] = useState(false);
    const [showOthers, setShowOthers] = useState(false);

    return (
        <header
            className={`p-4 text-sky-900 sticky top-0 z-50 transition-all duration-300 ${
                isHovered ? "shadow-md" : ""
            }`}
            style={{
                backgroundColor: isHovered ? '#fff9db' : '#ffffe7',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setShowArchives(false);
                setShowOthers(false);
            }}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center relative">
                <Link href="/" className="text-2xl font-semibold hover:text-sky-500">
                    lumaca
                </Link>
                <nav className="space-x-8 text-sm md:text-base font-medium flex items-center">
                    {/* Archives with dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setShowArchives(true)}
                        onMouseLeave={() => setShowArchives(false)}
                    >
                        <Link href="/archives/archives_index" className="hover:text-sky-500">
                            Archives
                        </Link>
                        {showArchives && (
                            <div className="absolute left-0 mt-2 bg-white border rounded shadow-md w-32 text-left z-50">
                                <Link href="/archives/all" className="block px-4 py-2 hover:bg-sky-100">All</Link>
                                <Link href="/archives/2024" className="block px-4 py-2 hover:bg-sky-100">2024</Link>
                                <Link href="/archives/2025" className="block px-4 py-2 hover:bg-sky-100">2025</Link>
                            </div>
                        )}
                    </div>

                    {/* Others with dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setShowOthers(true)}
                        onMouseLeave={() => setShowOthers(false)}
                    >
                        <Link href="/others" className="hover:text-sky-500">
                            Others
                        </Link>
                        {showOthers && (
                            <div className="absolute left-0 mt-2 bg-white border rounded shadow-md w-40 text-left z-50">
                                <Link href="/others/information" className="block px-4 py-2 hover:bg-sky-100">Information</Link>
                                <Link href="/others/editor" className="block px-4 py-2 hover:bg-sky-100">Editor</Link>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}
