import Link from 'next/link';

export default function Header() {
    return (
        <header className="p-4 bg-white text-sky-900 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-semibold hover:text-sky-500">
                lumaca
            </Link>
            <nav className="space-x-4 text-sm md:text-base font-medium">
                <Link href="/" className="hover:text-sky-500">Home</Link>
                <Link href="/hobby" className="hover:text-sky-500">Hobby</Link>
            </nav>
        </div>
        </header>
    );
}
