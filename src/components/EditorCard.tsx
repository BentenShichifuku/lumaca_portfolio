import Image from "next/image";
import { Profile } from "../data/editors";

export default function EditorCard({ profile }: { profile: Profile }) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center text-center text-gray-800">
            <Image
                src={profile.image}
                alt={`${profile.name}のプロフィール画像`}
                width={160}
                height={160}
                className="rounded-full shadow-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
            <p className="text-sm mb-1 font-semibold">所属</p>
            <p className="mb-4">{profile.affiliation}</p>
            <p className="text-sm mb-1 font-semibold">メール</p>
            <p className="mb-4">{profile.email}</p>
            <a
                href={profile.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm hover:text-blue-800"
            >
                ポートフォリオを見る
            </a>
        </div>
    );
}
