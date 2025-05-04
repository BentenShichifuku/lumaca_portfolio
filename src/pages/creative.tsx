import Layout from "@/components/Layout";
import Image from "next/image";
import { creativeWorks } from "@/data/creativeData";

export default function Creative() {
    return (
    <Layout>
        <section className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-sky-900">Creative Works</h1>

        <div className="grid md:grid-cols-2 gap-8">
            {creativeWorks.map((work, idx) => (
                <div key={idx} className="bg-white rounded shadow p-4 hover:shadow-lg transition">
                <Image
                    src={work.imageUrl}
                    alt={work.title}
                    width={600}
                    height={400}
                    className="rounded mb-4 object-cover w-full h-48"
                />
                <h2 className="text-2xl font-semibold text-sky-800">{work.title}</h2>
                <p className="text-gray-600 mb-2">{work.type}</p>
                <p className="mb-4">{work.description}</p>
                <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 font-medium hover:underline"
                >
                    View More →
                </a>
                </div>
            ))}
        </div>
        </section>
    </Layout>
    );
}
