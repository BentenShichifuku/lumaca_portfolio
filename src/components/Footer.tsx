import { useState } from 'react';

export default function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <footer
            className="text-center text-sm py-6 text-gray-500 transition-all duration-300"
            style={{
                backgroundColor: isHovered ? '#fff9db' : '#ffffe7',
                boxShadow: isHovered ? '0 -4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p>&copy; {new Date().getFullYear()} lumaca. All rights reserved.</p>
        </footer>
    );
}
