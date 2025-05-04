import Layout from '@/components/Layout';
import { techStack, github, articles, projects } from '@/data/techData';

export default function TechPage() {
    return (
    <Layout>
        <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-sky-900">Tech Stack</h1>

        {/* 技術スタック */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
            {techStack.map((tech, idx) => (
            <div key={idx} className="text-center">
                <i className={`text-4xl mb-2 ${tech.icon}`}></i>
                <p className="font-semibold">{tech.name}</p>
                <p className="text-sm text-gray-600">{tech.level}</p>
            </div>
            ))}
        </div>

        {/* GitHub */}
            <div className="mb-12">
            <h2 className="text-xl font-semibold mb-2">GitHub</h2>
            <a
            href={github.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            >
            @{github.username}
            </a>
        </div>

        {/* 技術記事 */}
        <div className="mb-12">
            <h2 className="text-xl font-semibold mb-2">Articles</h2>
            <ul className="list-disc list-inside">
            {articles.map((article, idx) => (
                <li key={idx}>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {article.title}
                </a>
                </li>
            ))}
            </ul>
        </div>

        {/* プロジェクト */}
        <div>
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <ul className="space-y-4">
            {projects.map((project, idx) => (
                <li key={idx}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-700 hover:underline">
                    {project.name}
                </a>
                <p className="text-sm text-gray-700">{project.description}</p>
                </li>
            ))}
            </ul>
        </div>
        </section>
    </Layout>
    );
}
