// src/components/ProfileCard.tsx
import Image from "next/image";

export default function ProfileCard() {
    return (
        <section className="flex justify-center py-20 bg-white/70 backdrop-blur-md">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full text-gray-800">
        <div className="flex flex-col items-center text-center space-y-4">
            <Image
                src="/profile.jpg"
                alt="プロフィール写真"
                width={120}
                height={120}
                className="rounded-full shadow-md"
            />
            <h2 className="text-2xl font-bold">BraveBird</h2>
            <p className="text-sm">所属：静岡大学 情報学部 狩野研究室</p>
            <p className="text-sm">Mail：yyoshida@kanolab.next</p>
            <p className="text-sm">その他：XXX</p>
            </div>
        </div>
    </section>
    );
}
