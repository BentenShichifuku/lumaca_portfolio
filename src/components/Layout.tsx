import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div
            className="min-h-screen flex flex-col text-gray-900 font-sans"
            style={{ backgroundColor: '#ffffe7' }} // 薄いクリーム色
        >
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
