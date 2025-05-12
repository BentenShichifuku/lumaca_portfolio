import EditorCard from "./EditorCard";
import { profiles } from "../data/editors";

export default function EditorsList() {
    return (
        <section
            className="flex justify-center py-20 min-h-screen" // ← 修正ポイント
            style={{ backgroundColor: "#ffffe7" }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full px-6">
                {profiles.map((profile, index) => (
                    <EditorCard key={index} profile={profile} />
                ))}
            </div>
        </section>
    );
}
