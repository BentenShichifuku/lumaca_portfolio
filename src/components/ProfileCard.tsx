import Image from "next/image";

export default function ProfileCard() {
    return (
        <section
            className="flex justify-center py-20"
            style={{ backgroundColor: "#ffffe7" }} // 常に薄いクリーム色
        >
            <div className="bg-white rounded-xl shadow-lg p-14 max-w-6xl w-full text-gray-800">
                <div className="flex flex-col items-center text-center space-y-8">
                    <Image
                        src="/profile.jpg"
                        alt="プロフィール写真"
                        width={180}
                        height={180}
                        className="rounded-full shadow-md"
                    />
                    <h2 className="text-4xl font-bold">Lumaca</h2>
                    <p className="mb-1">Affiliation:</p>
                    <p>静岡大学 情報学部 狩野研究室</p>
                    <p className="mb-1">Mail:</p>
                    <div className="text-sm text-left">
                        <ul className="list-[circle] pl-5">
                            <li>yyoshida@kanolab.net</li>
                            <li>yharada@kanolab.net</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
