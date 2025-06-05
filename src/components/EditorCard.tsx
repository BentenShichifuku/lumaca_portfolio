import Image from "next/image";
import { Profile } from "../data/editors";

export default function EditorCard({ profile }: { profile: Profile }) {
    return (
        <div className="w-[880px] h-[880px] bg-[#fff9db] rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center text-gray-800">
            <div className="mb-8">
                <Image
                    src={profile.image}
                    alt={`${profile.name}のプロフィール画像`}
                    width={160}
                    height={160}
                    className="rounded-full shadow-md"
                />
            </div>
            <h2 className="text-3xl font-bold mb-4">{profile.name}</h2>
            <div className="space-y-6 max-w-md">
                <div>
                    <p className="text-lg font-semibold mb-2">所属</p>
                    <p className="text-lg">{profile.affiliation}</p>
                </div>
                <div>
                    <p className="text-lg font-semibold mb-2">メール</p>
                    <p className="text-lg">{profile.email}</p>
                </div>
                <a
                    href={profile.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-lg hover:text-blue-800 block mt-8"
                >
                    ポートフォリオを見る
                </a>
            </div>
        </div>
    );
}
