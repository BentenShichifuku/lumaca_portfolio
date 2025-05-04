import Layout from '@/components/Layout';
import { researchInfo, presentations } from '@/data/researchData';

export default function ResearchPage() {
    return (
        <Layout>
        <section className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6 text-sky-900">Research</h1>

        {/* 所属 */}
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Lab</h2>
            <p>{researchInfo.labName}</p>
        </div>

        {/* テーマ */}
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Theme</h2>
            <p>{researchInfo.theme}</p>
        </div>

        {/* 概要 */}
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>{researchInfo.description}</p>
        </div>

        {/* 発表歴 */}
        <div>
            <h2 className="text-xl font-semibold mb-2">Presentations</h2>
            <ul className="list-disc list-inside space-y-2">
            {presentations.map((item, idx) => (
                <li key={idx}>
                    <span className="font-medium">{item.title}</span>（{item.date}）<br />
                    <span className="text-gray-700">{item.topic}</span>
                </li>
            ))}
            </ul>
        </div>
        </section>
    </Layout>
    );
}
