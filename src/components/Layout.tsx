import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className="min-h-screen flex flex-col bg-sky-50 text-gray-900 font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        </div>
    );
}
